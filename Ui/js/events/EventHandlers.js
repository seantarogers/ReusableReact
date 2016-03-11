import PolicyActionCreator from '../actionCreators/PolicyActionCreator'

export function handlePolicySelected(selectedPolicy) {
        if (selectedPolicy.selected) {
            PolicyActionCreator.policySelected(selectedPolicy);
            return;
        }

        PolicyActionCreator.policyUnselected(selectedPolicy);
    };


