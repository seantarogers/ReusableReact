import React, { Component } from 'react';
import { BrowserHistory } from 'react-router'

import CustomerStore from '../stores/CustomerStore';

export default class CustomerController extends Component {
    constructor(props) {
        super(props);  
        this.displayName = 'CustomerController.react';
    }
    componentDidMount() {
        console.log('did mount');
        CustomerStore.addChangeListener(this.onChange);
    }
    componentWillUnmount() {
        CustomerStore.removeChangeListener(this.onChange);
    }
    onChange() {
        console.log('on change');
        var customer = CustomerStore.get();
        console.log(customer.firstName);

    }
    render() {
        return (<div> 'in customer' </div>);
    }
}
