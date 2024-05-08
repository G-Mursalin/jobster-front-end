import { baseApi } from "../../api/baseApi";

const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get Jobs Stats Data
    getCountedJobsStats: builder.query({
      query: () => {
        return {
          url: "/meta/get-stats",
          method: "GET",
        };
      },
      providesTags: ["meta"],
    }),
    // Get Jobs Monthly Stats
    getMonthlyStats: builder.query({
      query: () => {
        return {
          url: "/meta/get-monthly-stats",
          method: "GET",
        };
      },
      providesTags: ["meta"],
    }),
  }),
});

export const { useGetCountedJobsStatsQuery, useGetMonthlyStatsQuery } = jobApi;
