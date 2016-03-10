import React, { Component } from 'react';

const ControllerDecorator = {
    decorate: (Component, stores, getState) => {

        return class controllerDecorator extends Component {
            constructor(props) {
                super(props);
                this.state = getState();
                this.onStoreChange = this.onStoreChange.bind(this);
            }
            componentDidMount() {
                stores.forEach(store =>
                    store.addChangeListener(this.onStoreChange)
                );
            }
            componentWillUnmount() {
                stores.forEach(store =>
                    store.removeChangeListener(this.onStoreChange)
                );
            }
            onStoreChange() {
                this.setState({ data: getState() });
            }
            render() {
                return <Component {...this.state} />;
            }
        };
    }
}

export default ControllerDecorator;

//add a common base
//then a customer controller specific one
//then the specific ones
//then turn them into es7 decorators

//_buildStateObject() {
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