import PolicyActionCreator from '../actionCreators/PolicyActionCreator'

const EventHandlers = {
    handlePolicySelected: (selectedPolicy) => {
        if (selectedPolicy.selected) {
            PolicyActionCreator.policySelected(selectedPolicy);
            return;
        }

        PolicyActionCreator.policyUnselected(selectedPolicy);
    }
}

export default EventHandlers;
