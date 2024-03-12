import axiosClient from './../axiosClient';

const categoryAdminService = {

    async getListsCategory(params) {
		try {
			const newParams = { ...params }
			const url = `cms/category/lists`;
			const response = await axiosClient.get(url, {
				params: {...newParams},
			})
			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- E ', e);
		}
	},

	async createCategory(data) {
		try {
			const url = `cms/category/store`;
			const response = await axiosClient.post(url, data);
			console.log('------------- createTransaction@response: ', response);
			if (response.status === 200 || response.status === 201) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- createTransaction@Error ', e);
		}

		return {
			status: 501
		}
	},
	async updateCategory(data, id) {
		try {
			const url = `cms/category/update/${id}`;
			const response = await axiosClient.put(url, data);
			console.log('------------- updateCategory@response: ', response);
			if (response.status === 200 || response.status === 201) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- updateCategory@Error ', e);
		}

		return {
			status: 501
		}
	},

	async deleteById(id) {
		try {
			const url = `cms/category/delete/${id}`;
			const response = await axiosClient.delete(url)

			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- deleteById@Error ', e);
			return {};
		}
	},
}

export default categoryAdminService;
