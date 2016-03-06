import React, { Component } from 'react';
import { BrowserHistory } from 'react-router'

import CustomerStore from '../../stores/CustomerStore';
import PolicySelectedStore from '../../stores/PolicySelectedStore';

import PoliciesTable from '../../components/PoliciesTable.react';
import PolicyActionCreator from '../../actionCreators/PolicyActionCreator';

export default class CustomerController extends Component {
    constructor(props) {
        super(props);  
        this.onChange = this.onChange.bind(this);
        this.displayName = 'CustomerController.react';
    }
    componentDidMount() {
        CustomerStore.addChangeListener(this.onChange);
        PolicySelectedStore.addChangeListener(this.onChange);
    }
    componentWillUnmount() {
        CustomerStore.removeChangeListener(this.onChange);
        PolicySelectedStore.removeChangeListener(this.onChange);
    }
    handlePolicySelected(policyId) {
        PolicyActionCreator.policySelected(policyId);
    }
    onChange() {
        const  customer = CustomerStore.get();
        const policySelected = PolicySelectedStore.get();

        this.setState({
            customer: customer,
            customerName: customer.name 
        });

    }
    render() {
        return (<PoliciesTable {...this.state} />);
    }
}


//import React from 'react';

//import RouteUtils from '../../utils/RouteUtils';
//import { newBusinessFlowActions } from '../../utils/BusinessFlowStartUtils';

//import GetPoliciesWithSelectionsQuery from '../../queries/GetPoliciesWithSelectionsQuery';

//import CustomerStore from '../../stores/persistent/domain/CustomerStore';
//import PoliciesSelectedStore from '../../stores/persistent/userInput/PoliciesSelectedStore';
//import CustomerAccountTypeStore from '../../stores/persistent/CustomerAccountTypeStore';
//import LoanPremiumStore from '../../stores/persistent/userInput/LoanPremiumStore';

//import AccountTypeService from '../../services/AccountTypeService';
//import DepartmentSelectionService from '../../services/DepartmentSelectionService';

//import { selectAccountTypeAction } from '../../actions/CustomerActions';
//import PolicyActions from '../../actions/PolicyActions';
//import RateActions from '../../actions/RateActions';

//import Page from '../../components/shared/generic/page/Page.react';

//export default class PoliciesController extends React.Component {
//    constructor(props, policiesComponent) {
//        super(props);

//        this.policiesComponent = policiesComponent;
//        this.state = this._buildStateObject();
//        this.componentWillMount = this.componentWillMount.bind(this);
//        this.componentWillUnmount = this.componentWillUnmount.bind(this);
//        this.onChange = this.onChange.bind(this);
//        this.render = this.render.bind(this);
//    }
//    componentWillMount() {
//        CustomerStore.addChangeListener(this.onChange);
//        PoliciesSelectedStore.addChangeListener(this.onChange);
//        CustomerAccountTypeStore.addChangeListener(this.onChange);
//        LoanPremiumStore.addChangeListener(this.onChange);
//    }
//    componentWillUnmount() {
//        CustomerStore.removeChangeListener(this.onChange);
//        PoliciesSelectedStore.removeChangeListener(this.onChange);
//        CustomerAccountTypeStore.removeChangeListener(this.onChange);
//        LoanPremiumStore.removeChangeListener(this.onChange);
//    }
//    _buildStateObject() {
//        return {
//            policiesWithSelections: GetPoliciesWithSelectionsQuery.execute(),
//            accountTypePersonalSelected: AccountTypeService.isPersonalSelected(),
//            accountTypeCommercialSelected: AccountTypeService.isCommercialSelected(),
//            accountTypesAvailable: CustomerAccountTypeStore.getAccountTypesAvailable(),
//            accountTypeValues: CustomerAccountTypeStore.getAccountTypeValues(),
//            accountTypeMessages: CustomerAccountTypeStore.getAccountMessages(),
//            hasMultipleConfigurations: DepartmentSelectionService.hasMultipleConfigurations(),
//            loanPremium: LoanPremiumStore.getLoanPremium()
//        };
//    }
//    onChange() {
//        const nextState = this._buildStateObject();
//        this.setState(nextState);
//    }
//    handleSelectAllPolicies(selected) {
//        PolicyActions.selectAll(selected);
//    }
//    handleSelectAccountType(accountType) {
//        selectAccountTypeAction(accountType);
//    }
//    handleSelectSinglePolicy(policy) {
//        PolicyActions.selectSingle(policy);
//    }
//    handleBack() {
//        PolicyActions.selectClear();
//        RouteUtils.navigateToConfigurationSelection(); 
//    }
//    handleProceed() {
//        newBusinessFlowActions();
//        RateActions.reset();
//        RouteUtils.navigateToRates();
//    }
//    handleAgreementsView() {
//        PolicyActions.selectClear();
//        RouteUtils.navigateToAgreements();
//    }
//    canProceed() {
//        return this.state.policiesWithSelections.totalAmountForFinanceIsValid
//            && (this.state.accountTypePersonalSelected || this.state.accountTypeCommercialSelected);
//    }
//    _buildPoliciesComponentProps() {
//        return {
//            policiesWithSelections: this.state.policiesWithSelections,
//            handleBack: this.handleBack,
//            handleProceed: this.handleProceed,
//            handleAgreementsView: this.handleAgreementsView,
//            handleSelectAllPolicies: this.handleSelectAllPolicies,
//            handleSelectSinglePolicy: this.handleSelectSinglePolicy,
//            handleGetAllPolicies: this.handleGetAllPolicies,
//            handleSelectAccountType: this.handleSelectAccountType,
//            canProceed: this.canProceed(),
//            accountTypePersonalSelected: this.state.accountTypePersonalSelected,
//            accountTypeCommercialSelected: this.state.accountTypeCommercialSelected,
//            accountTypeValues: this.state.accountTypeValues,
//            accountTypesAvailable: this.state.accountTypesAvailable,
//            accountTypeMessages: this.state.accountTypeMessages,
//            hasMultipleConfigurations: this.state.hasMultipleConfigurations,
//            loanPremium: this.state.loanPremium
//        };
//    }
//    render() {
//        return (
//            React.createElement(Page, { pageTitle: 'New Agreement' },
//                React.createElement(this.policiesComponent, this._buildPoliciesComponentProps())
//            )
//        );
//    }
//}