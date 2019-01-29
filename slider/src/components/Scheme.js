import React, { Component } from 'react';
import styled from 'styled-components';

import ReactFinalForm from './ReactFinalForm';


const HeadText = styled.h2`
	color: #ccc;
	font-size: 24px;
	font-weight: 300;
	line-height: 22px;
	text-align: center;
`

class Scheme extends React.Component {
	render() {
		return (
			<div>	
				<ReactFinalForm />
			</div>	
			)
	}
}



export default Scheme;