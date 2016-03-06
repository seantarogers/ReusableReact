import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const PolicyActionCreator = {
    policySelected: (policyId) => {
        
        AppDispatcher.dispatch({
            actionType: AppConstants.POLICY_SELECTED,
            data: policyId
        });
    }
};

export default PolicyActionCreator;