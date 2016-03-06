import {EventEmitter} from 'events';
import Assign from 'object-assign';
import R from 'ramda';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

let _policiesSelected = [];

function _addPolicySelected(selectedPolicyId) {
    
    if (!R.contains(selectedPolicyId, _policiesSelected)) {
        _policiesSelected = _policiesSelected.concat([selectedPolicyId]);
    };
}

function _removePolicySelected(unselectedPolicyId) {
    
    if (R.contains(unselectedPolicyId, _policiesSelected)) {

        _policiesSelected = _policiesSelected.filter((policySelected) => {
            return policySelected !== unselectedPolicyId;            
        });
    };
}

const PolicySelectedStore = Assign({}, EventEmitter.prototype, {
    get: () => {
        return _policiesSelected;
    },
    emitChange: () => {
        PolicySelectedStore.emit(AppConstants.POLICY_SELECTED_CHANGED);
    },
    addChangeListener: (callback) => {
        PolicySelectedStore.on(AppConstants.POLICY_SELECTED_CHANGED, callback);
    },
    removeChangeListener: (callback) => {
        PolicySelectedStore.removeListener(AppConstants.POLICY_SELECTED_CHANGED, callback);
    }
});

PolicySelectedStore.dispatchToken = AppDispatcher.register(action => {
    switch (action.actionType) {
        case AppConstants.POLICY_SELECTED:
            _addPolicySelected(action.data);
            PolicySelectedStore.emitChange();
            break;
        case AppConstants.POLICY_UNSELECTED:
            _removePolicySelected(action.data);
            PolicySelectedStore.emitChange();
            break;
        default:
            break;
    }
});

export default PolicySelectedStore;