import HttpClient from '../services/HttpClient';
import  CustomerActionCreator from '../actionCreators/CustomerActionCreator';

const GetCustomerQuery = {
    execute: (financeProviderId) => {
        const get = HttpClient.get();
        const url = `customer/${financeProviderId}`; 

        get(url).then(response => {
                CustomerActionCreator.customerRecevied(response.jsonData);
            })
            .catch(ex => {
                console.log(`boom: ${ex}`);
            });
    }
};

export default GetCustomerQuery;