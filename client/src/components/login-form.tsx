import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const LoginForm = () => {
  const [Username, setUsername] = useState<string | null>("");
  const [Password, setPassword] = useState<string | null>("");
  const [usernameMessage, setUsernameMessage] = useState<string | null>("");
  const [passwordMessage, setPasswordMessage] = useState<string | null>("");

  const handleSubmit = () => {
    if (!Username) {
      setUsernameMessage("Username not defined,This field is required");
    } else {
      setUsernameMessage("");
      const usernameTest = /^[a-zA-Z0-9_]{3,19}$/.test(Username);
      if (!usernameTest) {
        setUsernameMessage("Username is not valid");
      }
    }
    if (!Password) {
      setPasswordMessage("Password not defined,This field is required");
    } else {
      const isValid = /^.{4,30}$/.test(Password);
      setPasswordMessage(null);
      if(!isValid){
        setPasswordMessage("Password is not valid");
      }
    }
  };
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your username below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="text">username</Label>
            <text className="text-red-500 text-xs">{usernameMessage}</text>
            <Input
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              type="text"
              placeholder="striver"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <text className="text-red-500 text-xs">{passwordMessage}</text>
            <Input
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <Button onClick={handleSubmit} type="submit" className="w-full">
            Login
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default LoginForm;
