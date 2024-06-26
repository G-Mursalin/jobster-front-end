import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Signup
    signUp: builder.mutation({
      query: (userRegisterInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: userRegisterInfo,
      }),
    }),
    // Login
    login: builder.mutation({
      query: (userLoginInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userLoginInfo,
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation } = authApi;
