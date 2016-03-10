import React, { Component } from 'react';
import { BrowserHistory } from 'react-router'

import GetCustomerWithPolicySelectionsQuery from '../../queries/GetCustomerWithPolicySelectionsQuery';
import CustomerStore from '../../stores/CustomerStore';
import PolicySelectedStore from '../../stores/PolicySelectedStore';

import PoliciesTable from '../../components/PoliciesTable.react';
import Header from '../../components/Header.react';
import ControllerDecorator from '../ControllerDecorator.react'
import PolicyActionCreator from '../../actionCreators/PolicyActionCreator'

class CustomerController extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'CustomerController.react';
        this.state = { data: {} };
    }
    handlePolicySelected(selectedPolicy) {
        if (selectedPolicy.selected) {
            PolicyActionCreator.policySelected(selectedPolicy);
            return;
        }

        PolicyActionCreator.policyUnselected(selectedPolicy);        
    }
    render() {
        const customerName = this.props.data ? this.props.data.name : '';

        return (
            <div className='container'>
                <div className='row'>
                    <Header customerName={customerName} financeProviderName='financeProvider2' />
                    <PoliciesTable {...this.props} handleSelected={this.handlePolicySelected} />
                </div>
            </div>
        );
    }
}

export default ControllerDecorator.decorate(
    CustomerController, 
    [CustomerStore, PolicySelectedStore],
    () => GetCustomerWithPolicySelectionsQuery.execute());
