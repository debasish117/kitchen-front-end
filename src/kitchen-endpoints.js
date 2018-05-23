import axiosApi from './axios-config';

export default {
  async loginRequest(data) {
    return axiosApi.post('authenticate', data);
  },

}