import React, { useState } from "react";
import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  FormHelperText,
} from "@chakra-ui/core";
import Axios from "axios";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { useNavigate } from "react-router-dom";
export default function LogInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const { data } = await Axios.post("/api/users/login", {
        email,
        password,
      });
      if (data.isAdmin === true) navigate("/admin");
      else navigate("/home");
    } catch (err) {
      console.log("error:", err.message);
    }
  };
  return (
    <ThemeProvider>
      <CSSReset />
      <form method="POST" onSubmit={handleSignIn}>
        <Stack maxWidth={1200} margin="auto" spacing={5} marginTop={5}>
          <FormControl>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              isRequired
              type="email"
              id="email"
              aria-describedby="email-helper-text"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </FormControl>
          <FormHelperText id="email-helper-text">
            Enter an valid email address
          </FormHelperText>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <Input
                isRequired
                type={showPassword ? "text" : "password"}
                id="password"
                aria-describedby="password-helper-text"
                autoComplete="off"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  height="1.75rem"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormHelperText id="password-helper-text">
            Enter a valid password
          </FormHelperText>
          <FormControl>
            <Button variantColor="blue" type="submit">
              Sign In
            </Button>
          </FormControl>
        </Stack>
        <button
          onClick={() => {
            navigate("/signup");
          }}
          style={{
            marginTop: "20px",
            marginLeft: "19%",
          }}
        >
          Don't have account?{" "}
          <span style={{ color: "blue" }}>Create your account</span>
        </button>
      </form>
    </ThemeProvider>
  );
}
