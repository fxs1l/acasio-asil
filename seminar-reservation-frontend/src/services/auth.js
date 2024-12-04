import apiClient from "./api";

const authEndpoint = "auth";

const AuthService = {
    login: async (payload) => {
        return await apiClient
            .post(`${authEndpoint}/login`, payload)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error.response;
            });
    },
    register: async (payload) => {
        return await apiClient
            .post(`${authEndpoint}/register`, payload)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error.response;
            });
    },
};

export default AuthService;
