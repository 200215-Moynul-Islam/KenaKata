import apiClient from '../axios/apiClient';
import endpoints from '../endpoints';

const categoryService = {
  getAll: async () => {
    const axiosResponse = await apiClient.get(endpoints.categories.getAll);

    return axiosResponse.data;
  },

  getById: async (id: number) => {
    const axiosResponse = await apiClient.get(endpoints.categories.getById(id));

    return axiosResponse.data;
  },
};

export default categoryService;
