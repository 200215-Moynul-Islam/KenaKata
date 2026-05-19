const endpoints = {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    register: '/users',
  },

  products: {
    getAll: '/products',
    getById: (id: number) => `/products/${id}`,
    getByCategoryId: (id: number) => `/categories/${id}/products`,
  },

  categories: {
    getAll: '/categories',
    getFeatured: (limit: number) => `/categories?limit=${limit}`,
    getProducts: (id: number) => `/categories/${id}/products`,
  },
};

export default endpoints;
