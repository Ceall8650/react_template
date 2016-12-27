require("../Styles/nav.sass")

import React, { Component } from 'react';
import { Title } from './title';
import { AreaList } from './areaList.js'

export class Nav extends Component {
	render() {
		return (
			<div className="nav">
				<Title />
				<AreaList />
			</div>
		);
	}
}
