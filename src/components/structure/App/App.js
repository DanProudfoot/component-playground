import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import style from './app.module.scss';
import Voice from 'components/structure/Voice';
import Panes from 'components/structure/Panes';
import FlipLink from 'components/structure/FlipLink';

const list = [
	{ path: 'voice', name: 'Voice', component: Voice },
	{ path: 'panes', name: 'FLIP panes', component: Panes },
	{ path: 'flip-link', name: 'FLIP link', component: FlipLink }
];

const basename = window.location.href.includes('localhost')
	? ''
	: window.location.pathname;

export default class App extends Component {
	render() {
		return (
			<HashRouter hashType="noslash" basename={basename}>
				<div className={style.app}>
					{list.map(item => (
						<Route
							key={item.path}
							path={`/${item.path}`}
							component={item.component}
						/>
					))}

					<Route exact path="/" component={Linkies} />
				</div>
			</HashRouter>
		);
	}
}

const Linkies = () => (
	<ul className={style.list}>
		{list.map(link => (
			<li key={link.path}>
				<Link to={link.path}>{link.name}</Link>
			</li>
		))}
	</ul>
);
