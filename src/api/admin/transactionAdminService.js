import axiosClient from './../axiosClient';

const transactionAdminService = {

    async getListsTransaction(params) {
		try {
			const newParams = { ...params }
			const url = `cms/transaction/lists`;
			const response = await axiosClient.get(url, {
				params: {...newParams},
			})
			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- E ', e);
			return {
				status: e.response?.status
			};
		}
	},

	async updateStatus(id, formData) {
		try {
			const url = `transaction/update-status/${id}`;
			const response = await axiosClient.put(url, formData);
			if (response.status === 200 || response.status === 201) {
				return response.data;
			}
		} catch (e) {
			console.log('---------------showTransaction@Error ', e);
		}
	}
}

export default transactionAdminService;
