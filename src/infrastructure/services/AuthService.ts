import type {IAuthService} from "@/doimain/interfaces/IAuthService.ts";
import api from "@/infrastructure/services/axios.ts";

export const AuthService: IAuthService = {
    login: async (email, password) => {
        const res = await api.post("/user/login", { email, password });
        return res.data.data.token;
    },
    logout: async () => {
        await api.post("/user/logout");
    },
}
