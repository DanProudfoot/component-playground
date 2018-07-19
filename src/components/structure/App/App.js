import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import loadable from 'loadable-components';

import Loading from 'components/ui/Loading';
import style from './app.module.scss';

const loadingOptions = { LoadingComponent: Loading };

const list = [
	{
		path: 'voice',
		name: 'Voice',
		component: loadable(() => import('components/structure/Voice'), {
			...loadingOptions
		}),
		disabled: false
	},
	{
		path: 'panes',
		name: 'FLIP panes',
		component: loadable(() => import('components/structure/Panes'), {
			...loadingOptions
		}),
		disabled: true
	},
	{
		path: 'flip-link',
		name: 'FLIP link',
		component: loadable(() => import('components/structure/FlipLink'), {
			...loadingOptions
		}),
		disabled: true
	},
	{
		path: 'drums',
		name: 'Sensor Drum Kit',
		component: loadable(() => import('components/structure/Drums'), {
			...loadingOptions
		}),
		disabled: false
	}
];

const basename = window.location.href.includes('localhost')
	? ''
	: window.location.pathname;

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<main className={style.app}>
					{list.map(item => (
						<Route
							key={item.path}
							path={`/${item.path}`}
							component={item.component}
						/>
					))}

					<Route exact path="/" component={Index} />
				</main>
			</BrowserRouter>
		);
	}
}

const Index = () => (
	<section className={style.index}>
		<h1 className={style.title}>Components</h1>
		<ul className={style.list}>
			{list.map(
				link =>
					!link.disabled && (
						<li key={link.path}>
							<Link to={link.path}>{link.name}</Link>
						</li>
					)
			)}
		</ul>
	</section>
);
