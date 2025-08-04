import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {type AppDispatch, type RootState, store} from "@/shared/store";
import {loginUser} from "@/application/usecases/loginUser.ts";
import {AuthService} from "@/infrastructure/services/AuthService.ts";
import {UserService} from "@/infrastructure/services/UserService.ts";
import {useNavigate} from "react-router-dom";
import {Input} from "@/presentation/components/ui/input.tsx";
import {Button} from "@/presentation/components/ui/button.tsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/presentation/components/ui/card.tsx";
import {Label} from "@/presentation/components/ui/label.tsx";

export default function Login() {
    const dispatch = useDispatch<AppDispatch>();
    const {loading, error} = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        await loginUser(AuthService, UserService)(email, password, dispatch);

        const role = store.getState().user.role;

        if (role === "ADMIN") {
            navigate("/");
        } else {
            alert("No permission!");
        }
    };

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login to your account</CardTitle>
                            <CardDescription>
                                Enter your email below to login to your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="flex flex-col gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="m@example.com"
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">Password</Label>
                                            <a
                                                href="#"
                                                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                            >
                                                Forgot your password?
                                            </a>
                                        </div>
                                        <Input
                                            id="password"
                                            type="password"
                                            required
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Button
                                            type="submit"
                                            className="w-full"
                                            onClick={handleLogin}
                                            disabled={loading}
                                        >
                                            {loading ? "Login..." : "Login"}
                                        </Button>
                                        {error && <p className="text-red-600">{error}</p>}
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
