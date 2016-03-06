import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import GetCustomerQuery from './queries/GetCustomerQuery';
import CustomerController from './controllers/financeProvider1/CustomerController.react';

function _customerEnter() {
    GetCustomerQuery.execute();
}

render(
    <Router history={browserHistory}>
    <Route path='/' component={CustomerController} onEnter={_customerEnter} />         
    </Router>, document.getElementById('app'));
   


//<Route path='/policies:customerName' component={PoliciesController} />


//what are the main features of a controller?

//set up listen to store
//remove listen to store
//handle events -- on some object?
// convert state to props --
// render and render smaller bits - smaller bits pushed out to functions


//dont like base controllers which call things defined on extension
//dont like super.


//eaasy to share utilities but how about
//Lifecycle Hooks and State Providers


//previously you could use a mixin the declare add listenrs, remove listeners, on change and set state
//we are now use inheritence to do this which is no better as it has the implicit contracts of ovveridden methods etc
//pass in a list of stores to a mixin ...stores and do common operations on it

//A higher-order component is just a function that takes an existing component and returns another component that wraps it.