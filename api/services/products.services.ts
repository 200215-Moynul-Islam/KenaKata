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

  getFeatured: async () => {
    const axiosResponse = await apiClient.get(endpoints.products.getAll);

    const products = axiosResponse.data;

    // take only first 8 products
    const featured = products.slice(0, 8);

    return {
      success: true,
      data: featured,
    };
  },
};

export default productService;
