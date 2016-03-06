import HttpClient from '../services/HttpClient';
import  CustomerActionCreator from '../actionCreators/CustomerActionCreator';

const GetCustomerQuery = {
    execute: () => {
        const get = HttpClient.get();        
        get('customer/1').then(response => {
                CustomerActionCreator.customerRecevied(response.jsonData);
            })
            .catch(ex => {
                console.log(`boom: ${ex}`);
            });
    }
};

export default GetCustomerQuery;