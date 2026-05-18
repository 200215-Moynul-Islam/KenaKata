import apiClient from '../axios/apiClient';
import endpoints from '../endpoints';

const productService = {
  getAll: async () => {
    const axiosResponse = await apiClient.get(endpoints.products.getAll);

    return axiosResponse.data;
  },

  getById: async (id: number) => {
    const axiosResponse = await apiClient.get(endpoints.products.getById(id));

    return axiosResponse.data;
  },
};

export default productService;
