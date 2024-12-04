import axios from "axios";

export const baseUrl =
    import.meta.env.BACKEND_API_URL ?? "http://localhost:5000/api";

const apiClient = axios.create({
    baseURL: baseUrl,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

// apiClient.interceptors.request.use(
//     function (config) {
//         const token = window.localStorage.getItem("token");
//         config.headers.Authorization = token;
//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     },
// );

export default apiClient;
