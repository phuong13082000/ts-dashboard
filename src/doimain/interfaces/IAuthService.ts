export interface IAuthService {
    login(email: string, password: string): Promise<string>;
    logout(): Promise<void>;
}
