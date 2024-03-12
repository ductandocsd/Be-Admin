import axiosClient from "./axiosClient";

const AuthApi = {
    async login(data) {
        try {
            const url = `auth/login`;
            const response = await axiosClient.post(url, data)
            console.log('----------- login: ', response);
            if (response.status === 200 || response.status === 201) {
                return response.data;
            }
        } catch (e) {
            console.log('--------------- login@E ', e);
        }

        return {
            status: 501,
            message: 'Đăng nhập thất bại'
        };
    },
};

export default AuthApi;
