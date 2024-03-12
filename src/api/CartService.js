import axiosClient from './axiosClient';

const CartApi = {

    async getTransaction(page, page_size) {
        try {
			const url = `order?${page && `page=${page}`}${page_size && `&page_size=${page_size}`}`;
			const response = await axiosClient.get(url)
            console.log('------------- getTransaction@response: ', response);
			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- getOrderList@Error ', e);
		}

		return  {
			status: 501
		}
    },
    async createTransaction(data) {
        try {
            const url = `order/store`;
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
    async deleteTransaction(id) {
        try {
            const url = `transaction/delete/${id}`;
            const response = await axiosClient.delete(url);
            console.log('------------- deleteTransaction@response: ', response);
            if (response.status === 200 || response.status === 201) {
                return response.data;
            }
        } catch (e) {
            console.log('--------------- deleteTransaction@Error ', e);
        }

        return {
            status: 501
        }
    },
    async showTransaction(id) {
        try {
            const url = `transaction/${id}`;
            const response = await axiosClient.get(url);
            if (response.status === 200 || response.status === 201) {
                return response.data;
            }
        } catch (e) {
            console.log('---------------showTransaction@Error ', e);
        }
    },
    async showConfig() {
        try {

            const data = {
                "status" : [
                    {
                        'value' : -1,
                        'name' : 'Huỷ hàng',
                        'class' : 'danger'
                    },
                    {
                        'value' : 0,
                        'name' : 'Khởi tạo',
                        'class' : 'light',
                        'text' : 'text-dark'
                    },
                    {
                        'value' : 2,
                        'name' : 'Chờ xử lý',
                        'class' : 'warning'
                    },
                    {
                        'value' : 3,
                        'name' : 'Chờ lấy hàng',
                        'class': 'secondary'
                    },
                    {
                        'value' : 4,
                        'name' : 'Hoàn thành',
                        'class': 'primary'
                    },
                ]
            }
            return {
                data: data,
                status: 200
            };

            // const url = `transaction/config`;
            // return [];
            // const response = await axiosClient.get(url);
            // if (response.status === 200 || response.status === 201) {
            //     return response.data;
            // }
        } catch (e) {
            console.log('---------------showTransaction@Error ', e);
        }
    },
    async vote(data) {
        try {
            const url = `vote/store`;
            const response = await axiosClient.post(url, data);
            if (response.status === 200 || response.status === 201) {
                return response.data;
            }
        } catch (e) {
            console.log('---------------vote@Error ', e);
        }
    }
}

export default CartApi;
