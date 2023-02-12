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
  Radio,
  RadioGroup,
} from "@chakra-ui/core";
import Axios from "axios";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { useNavigate } from "react-router-dom";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [isAdmin, setisAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const { data } = await Axios.post("/api/users/signup", {
        email,
        password,
        firstname,
        lastname,
        isAdmin,
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
      <form method="POST" onSubmit={handleSignUp}>
        <Stack maxWidth={1200} margin="auto" spacing={5} marginTop={5}>
          <FormControl>
            <FormLabel htmlFor="firstname">First Name</FormLabel>
            <Input
              isRequired
              type="text"
              id="firstname"
              aria-describedby="firstname-helper-text"
              value={firstname}
              onChange={({ target }) => setfirstname(target.value)}
            />
            <FormHelperText id="firstname-helper-text">
              Enter First Name
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="lastname">Last Name</FormLabel>
            <Input
              isRequired
              type="text"
              id="lastname"
              aria-describedby="lastname-helper-text"
              value={lastname}
              onChange={({ target }) => setlastname(target.value)}
            />
            <FormHelperText id="lastname-helper-text">
              Enter Last Name
            </FormHelperText>
          </FormControl>
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
            <FormHelperText id="email-helper-text">
              Enter an valid email address
            </FormHelperText>
          </FormControl>
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
            <FormHelperText id="password-helper-text">
              Enter a valid password
            </FormHelperText>
          </FormControl>
          <FormControl as="fieldset">
            <FormLabel as="legend">Sign up as User or Admin</FormLabel>
            <RadioGroup defaultValue="user">
              <Radio value="user" onClick={() => setisAdmin(false)}>
                user
              </Radio>
              <Radio value="admin" onClick={() => setisAdmin(true)}>
                admin
              </Radio>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <Button variantColor="blue" type="submit">
              Sign up
            </Button>
          </FormControl>
        </Stack>
      </form>
    </ThemeProvider>
  );
}
