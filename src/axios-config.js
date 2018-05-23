import axiosInstance from 'axios';

const API_ENDPOINT = 'http://localhost:3000/'

const defaultHeaders = {
  'Cache-Control': 'no-cache'
};

var axios = axiosInstance.create({
  baseURL: API_ENDPOINT,
  timeout: 100000,
  // headers: {'Accept': 'application/json'}
});

export { API_ENDPOINT };

// TODO: Add logic to show Toast in certain cases.
function errorHandler(error) {
  // Do something with response error
  // API based error handling.
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    if (error.response.status === 403)
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest.      
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }

  if (error.response.status !== 403)
    return Promise.reject(error);
}

function successHandler(response) {
  return response;
}

function getDefaultHeaders() {
  return Object.keys(defaultHeaders).map((headerName) => {
    return { name: headerName, value: defaultHeaders[headerName] };
  })
    .reduce((headers, entry) => {
      if (entry.value)
        headers[entry.name] = entry.value;

      return headers;
    }, {});
}

export default {
  setDefaultHeader(headerName, headerValue) {
    defaultHeaders[headerName] = headerValue;
  },
  removeDefaultHeader(headerName) {
    defaultHeaders[headerName] = null;
  },
  get(url, params) {
    return axios.request({
      url,
      params,
      headers: getDefaultHeaders()
    }).then(successHandler).catch(errorHandler);
  },
  post(url, data, config) {
    return axios.request({
      method: 'post',
      url,
      data,
      ...config,
      headers: getDefaultHeaders()
    }).then(successHandler).catch(errorHandler);
  },
  put(url, data) {
    return axios.request({
      method: 'put',
      url,
      data,
      headers: getDefaultHeaders()
    }).then(successHandler).catch(errorHandler);
  },
  delete(url) {
    return axios.request({
      method: 'delete',
      url,
      headers: getDefaultHeaders()
    }).then(successHandler).catch(errorHandler);
  }
};