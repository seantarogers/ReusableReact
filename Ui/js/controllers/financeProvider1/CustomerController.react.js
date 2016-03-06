import React, { Component } from 'react';
import { BrowserHistory } from 'react-router'

import GetCustomerWithPolicySelectionsQuery from '../../queries/GetCustomerWithPolicySelectionsQuery';
import CustomerStore from '../../stores/CustomerStore';
import PolicySelectedStore from '../../stores/PolicySelectedStore';

import PoliciesTable from '../../components/PoliciesTable.react';
import Header from '../../components/Header.react';
import PolicyActionCreator from '../../actionCreators/PolicyActionCreator';
import connectToStores from '../../higherOrderComponents/StoreManager'

class CustomerController extends Component {
    constructor(props) {
        super(props);  
        this.displayName = 'CustomerController.react';
        this.state = {customer: {}};
    }
    handlePolicySelected(selectedPolicy) {
        if (selectedPolicy.selected) {
            PolicyActionCreator.policySelected(selectedPolicy);
            return;
        }

        PolicyActionCreator.policyUnselected(selectedPolicy);        
    }
    render() {
        const customerName = this.props.customer ? this.props.customer.name : '';

        return (
            <div className='container'>
                <div className='row'>
                    <Header customerName={customerName} financeProviderName='financeProvider1' />
                    <PoliciesTable {...this.props} handleSelected={this.handlePolicySelected} />
                </div>
            </div>
        );
    }
}

export default connectToStores(CustomerController, [CustomerStore, PolicySelectedStore], props => ({
    customer: GetCustomerWithPolicySelectionsQuery.execute()
}));
