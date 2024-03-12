import axiosClient from './../axiosClient';

const productAdminService = {

    async getListsProducts(params) {
		try {
			const newParams = { ...params }
			const url = `cms/product/lists`;
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

	async findById(id) {
		try {
			const url = `cms/product/${id}`;
			const response = await axiosClient.get(url)

			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- findById@Error ', e);
			return {};
		}
	},

	async updateProduct(data, id) {
		try {
			const url = `cms/product/update/${id}`;
			const response = await axiosClient.put(url, data);
			console.log('------------- updateProduct@response: ', response);
			if (response.status === 200 || response.status === 201) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- updateProduct@Error ', e);
		}

		return {
			status: 501
		}
	},
}

export default productAdminService;
