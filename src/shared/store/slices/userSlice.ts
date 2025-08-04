import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {User} from "@/doimain/models/User.ts";

const initialState: User = {
    _id: "",
    name: "",
    email: "",
    role: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserDetail(state, action: PayloadAction<User>) {
            return { ...state, ...action.payload };
        },
        clearUserDetail() {
            return initialState;
        },
    },
});

export const { setUserDetail, clearUserDetail } = userSlice.actions;
export default userSlice.reducer;
