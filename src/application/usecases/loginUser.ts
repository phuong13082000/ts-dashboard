import type {IAuthService} from "@/doimain/interfaces/IAuthService.ts";
import type {IUserService} from "@/doimain/interfaces/IUserService";
import type {AppDispatch} from "@/shared/store";
import {setAccessToken, setError, setLoading} from "@/shared/store/slices/authSlice.ts";
import {setUserDetail} from "@/shared/store/slices/userSlice.ts";

export const loginUser = (
    authService: IAuthService,
    userService: IUserService
) => {
    return async (
        email: string,
        password: string,
        dispatch: AppDispatch
    ): Promise<void> => {
        dispatch(setLoading(true));
        dispatch(setError(null));

        try {
            const token = await authService.login(email, password);
            dispatch(setAccessToken(token));

            const user = await userService.getDetail();
            dispatch(setUserDetail(user));
        } catch (err: any) {
            dispatch(setError(err.response?.data?.message || err.message));
        } finally {
            dispatch(setLoading(false));
        }
    };
};
