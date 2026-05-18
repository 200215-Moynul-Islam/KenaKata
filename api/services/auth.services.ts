import { LoginSchemaType, SignupSchemaType } from '@/schemas';
import apiClient from '../axios/apiClient';
import endpoints from '../endpoints';

const authService = {
  login: async (loginPayload: LoginSchemaType) => {
    const axiosResponse = await apiClient.post(endpoints.auth.login, loginPayload);

    const backendResponse = axiosResponse.data;

    if (backendResponse?.success) {
      localStorage.setItem('token', backendResponse.access_token);
    }

    return backendResponse;
  },

  signup: async (signupPayload: SignupSchemaType) => {
    // Create account
    await apiClient.post(endpoints.auth.register, signupPayload);

    // Default login
    const loginResponse = await authService.login({
      email: signupPayload.email,
      password: signupPayload.password,
    });

    return loginResponse;
  },

  logout: () => {
    localStorage.removeItem('token');
  },
};

export default authService;
