import axiosClient from './axiosClient';
import axios from "axios";

const productService = {
	async getListsProducts(params) {
		try {
			const newParams = { ...params }
			const url = `product`;
			const response = await axiosClient.get(url, {
				params: {...newParams},
			})

			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- getListsProducts@Error ', e);
		}

		return  {
			status: 501
		}
	},

	async findById(id) {
		try {
			const url = `product/${id}`;
			const response = await axiosClient.get(url)

			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- findById@Error ', e);
		}

		return  {
			status: 501
		}
	},

    async findBySlug(slug) {
		try {
			const url = `product/show/${slug}`;
			const response = await axiosClient.get(url)

			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- findById@findBySlug ', e);
		}

		return  {
			status: 501
		}
	},
	async uploadFile(data) {
		try {
			const url = `upload/image`;
			// const response = await axiosClient.post(url, data, { headers: { 'Accept': 'multipart/form-data' } });
			// const response = await axiosClient.post(url, data, { headers: { 'Accept': 'multipart/form-data' } });
			const response = await axios.post(`${process.env.REACT_APP_URL_API}/upload/image`, data, { headers: { 'Accept': 'multipart/form-data' } });
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
}


export default productService;
