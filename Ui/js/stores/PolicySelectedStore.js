import {EventEmitter} from 'events';
import Assign from 'object-assign';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

let _policySelected;

const PolicySelectedStore = Assign({}, EventEmitter.prototype, {
    get: () => {
        return _policySelected;
    },
    emitChange: () => {
        PolicySelectedStore.emit(AppConstants.POLICY_SELECTED_CHANGED);
    },
    addChangeListener: (callback) => {
        PolicySelectedStoreCustomerStore.on(AppConstants.POLICY_SELECTED_CHANGED, callback);
    },
    removeChangeListener: (callback) => {
        PolicySelectedStore.removeListener(AppConstants.POLICY_SELECTED_CHANGED, callback);
    }
});

PolicySelectedStore.dispatchToken = AppDispatcher.register(action => {
    switch (action.actionType) {
        case AppConstants.POLICY_SELECTED:
            _policySelected = action.data;
            PolicySelectedStore.emitChange();
            break;
        default:
            break;
    }
});

export default PolicySelectedStore;