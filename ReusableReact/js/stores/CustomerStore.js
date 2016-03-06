import {EventEmitter} from 'events';
import Assign from 'object-assign';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

let _customer;

const CustomerStore = Assign({}, EventEmitter.prototype, {
    get: () => {
        return _customer;
    },
    emitChange: () => {
        CustomerStore.emit(AppConstants.CUSTOMER_CHANGED);
    },
    addChangeListener: (callback) => {
        CustomerStore.on(AppConstants.CUSTOMER_CHANGED, callback);
    },
    removeChangeListener: (callback) => {
        CustomerStore.removeListener(AppConstants.CUSTOMER_CHANGED, callback);
    }
});

CustomerStore.dispatchToken = AppDispatcher.register(action => {
    switch (action.actionType) {
    case AppConstants.CUSTOMER_RECEIVED:
        _customer = action.data;
        CustomerStore.emitChange();
        break;
    default:
        break;
    }
});

export default CustomerStore;