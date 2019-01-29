import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

//import Link from './Link';
import { Switch, Route, Link } from 'react-router-dom';

const List = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
	height: 49px;
`

const StyledLink = styled.a`
	color: ${props => props.active ? 'pink' : '#fff'};
	font-size: 14px;
	font-weight: 300;
	line-height: 24px;
	padding-right: 33px;
	border-right: 1px solid #fff;

	&:hover{
		color: #8d8d8d;
		text-decoration: none;
	}
	
`

class Header extends React.Component {
	render(){
		return (
				<Row>
					<Col lg={12} >
						<nav>
							<List>
								{/*<Link link="#" text="Вызов мастера" />
								<Link link="#" text="Прайс на ремонт" />
								<Link link="#" text="Наши преимущества" />
								<Link link="#" text="Схема работы" />
								<Link link="#" text="Отзывы клиентов" />
								<Link link="#" text="Примеры работ" />
								<Link link="#" text="Контакты" />*/}
								<li><Link to='/'>
									<StyledLink>Вызов мастера</StyledLink>
								</Link></li>
								<li><Link to='/price'>
									<StyledLink>Прайс на ремонт</StyledLink>
								</Link></li>
								<li><Link to='/advantage'>
									<StyledLink>Наши преимущества</StyledLink>
								</Link></li>
								<li><Link to='/scheme'>
									<StyledLink>Схема работы</StyledLink>
								</Link></li>
								<li><Link to='/'>
									<StyledLink>Отзывы клиентов</StyledLink>
								</Link></li>
								<li><Link to='/'>
									<StyledLink>Примеры работ</StyledLink>
								</Link></li>
								<li><Link to='/'>
									<StyledLink>Контакты</StyledLink>
								</Link></li>
							</List>
						</nav>
					</Col>
				</Row>
			)
	}
}
export default Header;
