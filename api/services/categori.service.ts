import apiClient from '../axios/apiClient';
import endpoints from '../endpoints';

const categoryService = {
  getAll: async () => {
    const axiosResponse = await apiClient.get(endpoints.categories.getAll);

    return axiosResponse.data;
  },

  getFeatured: async (limit = 4) => {
    const axiosResponse = await apiClient.get(endpoints.categories.getFeatured(limit));

    return axiosResponse.data;
  },

  getProducts: async (id: number) => {
    const axiosResponse = await apiClient.get(`/categories/${id}/products`);

    return axiosResponse.data;
  },
};

export default categoryService;
