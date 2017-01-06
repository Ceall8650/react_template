require("../Styles/areaList.sass")
import React, { Component } from 'react';
import $ from 'jquery';

const areaList = [
	 {"name": "學校專區", "img": "/res/t_p1.png"},
	 {"name": "員工餐廳專區", "img": "/res/n_p1.png"},
	 {"name": "賣場專區", "img": "/res/n_p2.png"},
	 {"name": "夜市專區", "img": "/res/n_p3.png"},
	 {"name": "飲冰品專區", "img": "/res/n_p4.png"},
	 {"name": "伴手禮專區", "img": "/res/n_p5.png"},
	 {"name": "連鎖餐廳專區", "img": "/res/t_p2.png"}
 ]

export class AreaList extends Component {
	componentDidMount(){
		$(document).ready(function(){
			var owl = $('.owl-carousel');
		  owl.owlCarousel({
		  	"margin": 0,
		  	"loop": true,
		  	"nav": true,
		  	lazyLoad: true,
		  	items:6,
		  	responsive:{
		        0:{
		            items:2
		        },
		        600:{
		            items:4
		        },
		        1000:{
		            items:6
		        }
		    }
		  });

		});
	}
	getBackgoundImage (img){
		return {
            background: `url('${img}') no-repeat 50% 50%`,
            backgroundSize: `cover`
        }
	}
	render() {
		return (
			<div className="areaList owl-carousel owl-theme">
				{areaList.map( (obj, index) => (
						<div className="areaContainer" key={index} style={(this.getBackgoundImage(obj.img))}>
							<div className="areaName">{obj.name}</div>
						</div>
					))
				}
			</div>
		);
	}
}
