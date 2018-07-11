import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Flipper, Flipped } from 'react-flip-toolkit';
import cls from 'classnames';

import style from './app.module.scss';

export default class Panes extends Component {
	render() {
		return (
			<Flipper>
				<div className={style.app}>
					<Route
						path="/panes"
						render={() => (
							<TestItem className={cls(style.panel, style.first)}>
								Test Text 1
							</TestItem>
						)}
					/>
					<Route
						path="/panes"
						render={() => (
							<TestItem
								className={cls(style.panel, style.second)}
							>
								Test Text 2
							</TestItem>
						)}
					/>
					<Route
						path="/panes"
						render={() => (
							<TestItem className={cls(style.panel, style.third)}>
								Test Text 3
							</TestItem>
						)}
					/>
				</div>
			</Flipper>
		);
	}
}

const TestItem = ({ className, children, ...props }) => {
	return (
		<Flipped {...props}>
			<article className={className}>{children}</article>
		</Flipped>
	);
};
