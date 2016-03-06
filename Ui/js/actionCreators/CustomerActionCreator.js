import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CustomerActionCreator = {
    customerRecevied: (customer) => {
        
        AppDispatcher.dispatch({
            actionType: AppConstants.CUSTOMER_RECEIVED,
            data: customer
        });
    }
};

export default CustomerActionCreator;