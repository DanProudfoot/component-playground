import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './loading.module.scss';

export default class Loading extends Component {
	static propTypes = {};

	render() {
		return <div className={style.loading}>Loading...</div>;
	}
}
