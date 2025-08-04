import type {AppDispatch} from "@/shared/store";
import {logout, setError, setLoading} from "@/shared/store/slices/authSlice";
import {clearUserDetail} from "@/shared/store/slices/userSlice.ts";
import type {IAuthService} from "@/doimain/interfaces/IAuthService.ts";

export const logoutUser = (authService: IAuthService) => {
    return async (dispatch: AppDispatch) => {
        dispatch(setLoading(true));
        try {
            await authService.logout();
        } catch (err: any) {
            dispatch(setError(err.message));
        } finally {
            dispatch(logout());
            dispatch(clearUserDetail());
            dispatch(setLoading(false));
        }
    };
};
