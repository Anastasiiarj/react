import React, { Component } from 'react';
import styled from 'styled-components';

const List = styled.ul`
	color: #fff;
`

const ListItem = styled.li`
	padding-bottom: 15px;
	font-size: 18px;
	transition: 0.3s;

	&:hover{
		color: #8d8d8d;
		padding-left: 10px;
		transition: 0.3s;
	}
`

class Price extends React.Component {
	render() {
		return (
			<div>	
				<List>
					<ListItem>Замена стекла - 200$</ListItem>
					<ListItem>Ремонт ремонт - 500$</ListItem>
					<ListItem>Сдать телефон - 350$</ListItem>
				</List>
			</div>	
			)
	}
}

export default Price;