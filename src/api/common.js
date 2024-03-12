export const timeDelay = async (delay) => {
	return new Promise(res => setTimeout(res, delay))
}