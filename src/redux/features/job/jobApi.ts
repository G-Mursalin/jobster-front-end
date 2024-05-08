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
      invalidatesTags: ["job", "meta"],
    }),
    // Delete A Job
    deleteJob: builder.mutation({
      query: (jobId) => ({
        url: `/job/${jobId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["job", "meta"],
    }),
    // Edit A Job
    editJob: builder.mutation({
      query: (jobData) => {
        const { editJobId, ...data } = jobData;

        return {
          url: `/job/${editJobId}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["job"],
    }),
  }),
});

export const {
  useGetAllJobsQuery,
  useCreateJobMutation,
  useDeleteJobMutation,
  useEditJobMutation,
} = jobApi;
