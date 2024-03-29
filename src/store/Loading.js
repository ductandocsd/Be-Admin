export const toggleShowLoading = ( boolean ) =>
{
	return {
		type: 'LOADING',
		showLoading: boolean,
	};
}

const initValue = {
	showLoading: false
};
export const commonReducer = ( state = initValue, action ) =>
{
	switch ( action.type )
	{
		case 'LOADING':
			return {
				...state,
				showLoading: action.showLoading,
			};
		default: 
		return initValue;
	}
}