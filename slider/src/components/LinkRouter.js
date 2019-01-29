import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Price from './Price';
import Main from './Main';
import Advantage from './Advantage';
import Scheme from './Scheme';

class LinkRouter extends React.Component {
    render() {
        return (
               <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/price' component={Price}/>
                    <Route path='/advantage' component={Advantage}/>
                    <Route path='/scheme' component={Scheme}/>
                </Switch> 
            )
    }
}

export default LinkRouter;