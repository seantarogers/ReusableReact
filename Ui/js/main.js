import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import GetCustomerQuery from './queries/GetCustomerQuery';
import CustomerController from './controllers/CustomerController.react';

function _customerEnter() {
    GetCustomerQuery.execute();
}

render(
    <Router history={browserHistory}>
    <Route path='/' component={CustomerController} onEnter={_customerEnter} />         
    </Router>, document.getElementById('app'));
   


//<Route path='/policies:customerName' component={PoliciesController} />