import type {IAuthService} from "@/doimain/interfaces/IAuthService.ts";

export const AuthService: IAuthService = {
    login: async (email: string, password: string): Promise<void> => {
        console.log("Login with api: ", email, password);
        //call axios
    }
}
