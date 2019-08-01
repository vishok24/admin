import React, {Component} from 'react';
import { Route  } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import LifeCycle from './LifeCycle';

export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/admin' component={LifeCycle} />
                </Switch>
            </BrowserRouter>
        );
    }
}