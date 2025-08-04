import type {User} from "@/doimain/models/User.ts";

export interface IUserService {
    getDetail(): Promise<User>;
}
