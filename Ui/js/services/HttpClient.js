import { createFetch, base, accept, parseJSON, auth, header, method } from 'http-client'

const _fetch = createFetch(
    base('http://localhost:3443/api/'),
    auth('Bearer ' + 'atoken'),
    header('Content-Type', 'application/json'),
    accept('application/json'),
    method('GET'),
    parseJSON()
);

const HttpClient = {
    get: () => {
        return _fetch;
    }
};

export default HttpClient;