import axiosClient from './axiosClient';

const categoryService = {

    async getListsCategory(params) {
		try {
			const newParams = { ...params }
			const url = `category`;
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
			const url = `category/${id}`;
			const response = await axiosClient.get(url)

			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- findById@Error ', e);
			return {};
		}
	},

    async findBySlug(slug) {
		try {
			const url = `category/show/${slug}`;
			const response = await axiosClient.get(url)

			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- findById@Error ', e);
			return {};
		}
	},
}

export default categoryService;
