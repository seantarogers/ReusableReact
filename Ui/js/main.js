import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import GetCustomerQuery from './queries/GetCustomerQuery';
import CustomerController1 from './controllers/financeProvider1/CustomerController.react';
import CustomerController2 from './controllers/financeProvider2/CustomerController.react';

function _customerEnter(financeProviderId) {
    GetCustomerQuery.execute(financeProviderId);
}

render(
    <Router history={browserHistory}>
    <Route path='/1' component={CustomerController1} onEnter={_customerEnter(1)} />         
    <Route path='/2' component={CustomerController2} onEnter={_customerEnter(2)} />         
    </Router>, document.getElementById('app'));
 