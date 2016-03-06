import { createFetch, base, accept, parseJSON, auth, header, method } from 'http-client'

import  CustomerActionCreator from '../actionCreators/CustomerActionCreator';

//inject httpclient in to queries
const fetch = createFetch(
    base('http://localhost:3443/api/'), 
    auth('Bearer ' + 'atoken'),
    header('Content-Type', 'application/json'),
    accept('application/json'), 
    method('GET'),
    parseJSON()
);

const GetCustomerQuery = {
    execute: () => {

        fetch('customer/1').then(response => {
                console.log('received data from server');
                CustomerActionCreator.customerRecevied(response.jsonData);
            
                console.log(response.jsonData);
            })
            .catch(ex => {
                console.log(`boom: ${ex}`);
            });
    }
};

export default GetCustomerQuery;