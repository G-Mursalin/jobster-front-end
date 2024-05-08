import { baseApi } from "../../api/baseApi";

const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get All Jobs
    getAllJobs: builder.query({
      query: (args: { value: string | null; name: string | null }[]) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach(
            (item: { value: string | null; name: string | null }) => {
              if (!item.value || !item.name) return;
              params.append(item.name, item.value as string);
            }
          );
        }

        return {
          url: "/job",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["job"],
    }),
    // Create A Job
    createJob: builder.mutation({
      query: (jobInfo) => ({
        url: "/job",
        method: "POST",
        body: jobInfo,
      }),
      invalidatesTags: ["job"],
    }),
  }),
});

export const { useGetAllJobsQuery, useCreateJobMutation } = jobApi;
