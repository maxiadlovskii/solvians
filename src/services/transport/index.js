import axios from 'axios'
import { handleError } from './failors'
import qs from 'query-string'
var instance = axios.create();
//instance.defaults.headers.common = {};
export const transportService = async (path, options) => {
    let { origin, pathname, search } = new URL(path);
    const method = options.method ? options.method.toLowerCase() : 'get';
    if (method === 'get' && options.query) {
        const urlQueryString = qs.stringify(options.query);
        if (urlQueryString) {
            search = search ? `${search}&${urlQueryString}` : `?${urlQueryString}`
        }
    }
    const url = `${origin}${pathname}${search}`;
    return await axios[method](url, options.data)
        .then(async response => await response.data)
        .catch(async response => handleError(response))
};
