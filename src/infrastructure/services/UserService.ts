import type {IUserService} from "@/doimain/interfaces/IUserService.ts";
import api from "@/infrastructure/services/axios.ts";

export const UserService: IUserService = {
    getDetail: async () => {
        const res = await api.get("/user/user-details");
        return res.data.data;
    },
};
