require("../Styles/article")
require("../../vendor/jquery.scrollme")

import React from 'react';
import $ from 'jquery';
import scrollme from "../../vendor/jquery.scrollme"

const articleTitle = [
	{"title": "最新消息", "image": "/res/banner01.jpg",  "context": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
	{"title": "營養教育", "image": "/res/banner02.jpg", "context": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
	{"title": "重大消息", "image": "/res/banner03.jpg", "context": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
]

export class Article extends React.Component{
	constructor() {
        super();
    }
	getBackgoundImage (img){
		return {
            background: `url('${img}') no-repeat 50% 50%`,
            backgroundSize: `cover`
        }
	}
	render() {
		return (
			<div className="article scrollme">
				{
					articleTitle.map( (obj, index) => (
						<div className="articleContainer  " key={index}
							>
							<h3>{obj.title}</h3>
							<div 
								className="banner animateme" 
								data-when="enter"
				        data-from="0.5"
				        data-to="0"
				        data-opacity="0"
				        data-translatex="-200"
				        data-rotatez="90"
								style={this.getBackgoundImage(obj.image)}
								></div>
							<div className="context">{obj.context}</div>
						</div>
					))
				}
			</div>
		)
	}
}

// export default Article;