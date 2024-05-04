import { baseApi } from "../../api/baseApi";

const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
    }),
  }),
});

export const { useGetAllJobsQuery } = jobApi;
