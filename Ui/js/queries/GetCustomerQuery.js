import { createFetch, base, accept, parseJSON, auth, header, method } from 'http-client'

import  CustomerActionCreator from '../actionCreators/CustomerActionCreator';

//inject httpclient in to queries
const _fetch = createFetch(
    base('http://localhost:3443/api/'), 
    auth('Bearer ' + 'atoken'),
    header('Content-Type', 'application/json'),
    accept('application/json'), 
    method('GET'),
    parseJSON()
);

const GetCustomerQuery = {
    execute: () => {

        _fetch('customer/1').then(response => {
                CustomerActionCreator.customerRecevied(response.jsonData);
            })
            .catch(ex => {
                console.log(`boom: ${ex}`);
            });
    }
};

export default GetCustomerQuery;