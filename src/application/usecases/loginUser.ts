import type {IAuthService} from "@/doimain/interfaces/IAuthService.ts";

export const loginUser = (authService: IAuthService) => {
    return async (email: string, password: string) => {
        return await authService.login(email, password);
    }
}
