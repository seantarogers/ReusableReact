import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const PolicyActionCreator = {
    policySelected: (selectedPolicy) => {
        
        AppDispatcher.dispatch({
            actionType: AppConstants.POLICY_SELECTED,
            data: selectedPolicy.id
        });
    },
    policyUnselected: (unSelectedPolicy) => {
        
        AppDispatcher.dispatch({
            actionType: AppConstants.POLICY_UNSELECTED,
            data: unSelectedPolicy.id
        });
    }
};

export default PolicyActionCreator;