import AuthReducer from "./AuthSlice";
import CartReducer from "./CartSlice";

import { configureStore } from '@reduxjs/toolkit';
import { commonReducer } from "./Loading";

export const store = configureStore({
    reducer: {
        authReduce: AuthReducer,
        cartReduce: CartReducer,
		commonReducer: commonReducer,
    },
})
