import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get Me
    getMe: builder.query({
      query: () => {
        return {
          url: "/user/get-me",
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),

    // Update Me
    updateMe: builder.mutation({
      query: (userInfo) => ({
        url: "/user",
        method: "PATCH",
        body: userInfo,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetMeQuery, useUpdateMeMutation } = userApi;
