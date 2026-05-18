const endpoints = {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    register: '/users',
  },

  products: {
    getAll: '/products',
    getById: (id: number) => `/products/${id}`,
  },

  categories: {
    getAll: '/categories',
    getById: (id: number) => `/categories/${id}`,
  },
};

export default endpoints;
