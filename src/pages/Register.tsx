/* eslint-disable @typescript-eslint/no-explicit-any */
// React
import { ChangeEvent, FormEvent, useState } from "react";
// CSS
import Wrapper from "./../assets/wrappers/RegisterPage";
// React Tostify
import { toast } from "react-toastify";
// React Router DOM
import { useNavigate } from "react-router-dom";
// Components
import FormRow from "../components/FormRow";
import {
  useLoginMutation,
  useSignUpMutation,
} from "../redux/features/auth/authApi";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";
import Logo from "./../components/Logo";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const [signUp, { isLoading: isSignUpLoading }] = useSignUpMutation();
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const disPatch = useAppDispatch();
  const navigate = useNavigate();

  // Handle Form Data Changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  // Handle Form Submit
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const { name, email, password, isMember } = values;

      if (!email || !password || (!isMember && !name)) {
        toast.error("Please Fill Out All Fields");
        return;
      }

      // ***Login the user
      if (isMember) {
        // Send SignUp Request
        const res = await login({ email, password }).unwrap();

        // Decode the access Token
        const user = verifyToken(res.data.accessToken) as TUser;

        // Set user and accessToken to local storage
        disPatch(setUser({ user, token: res.data.accessToken }));

        // Redirect to Dashboard
        navigate("/");
        toast.success(`Welcome ${user.name}`);

        return;
      }

      // ***Register the user

      // Send SignUp Request
      const res = await signUp({ name, email, password }).unwrap();

      // Decode the access Token
      const user = verifyToken(res.data.accessToken) as TUser;

      // Set user and accessToken to local storage
      disPatch(setUser({ user, token: res.data.accessToken }));

      // Redirect to Dashboard
      navigate("/");
      toast.success(`Welcome`);

      setValues(initialState);
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  // Handle Login of SignUp
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "login" : "register"}</h3>

        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        {values.isMember ? (
          <>
            <p>Login Email: test@gmail.com</p>
            <p>Login Password: 123456</p>
          </>
        ) : (
          " "
        )}

        <button type="submit" className="btn btn-block">
          {values.isMember
            ? isLoginLoading
              ? "Loading..."
              : "login"
            : isSignUpLoading
            ? "Loading..."
            : "submit"}
        </button>

        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button className="member-btn" type="button" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
