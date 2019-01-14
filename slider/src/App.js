import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Hello />
        <SayFullName name="Nastya" surname="Rjevska" link="github.com" />
        <SayFullName name="Anna" surname="Stelmah" link="www.youtube.com" />
        <SayFullName name="Katrin" surname="Denev" link="facebook.com" />
      </div>
    );
  }
}

function Hello(){
  let w = "World"
  return(
      <h1>Hello {w}!</h1>
    )
}

function SayFullName(props){
  return(
        <div>
          <h3>Моё имя {props.name}, фамилия - {props.surname}</h3>
          <a href="props.link">Ссылка на мой профиль</a>
        </div>
    )
}

export default App;
