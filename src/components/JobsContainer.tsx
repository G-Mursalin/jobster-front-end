//  CSS
import Wrapper from "../assets/wrappers/JobsContainer";
// React Redux
import { useGetAllJobsQuery } from "../redux/features/job/jobApi";
import { IJob } from "../types/job.types";
// Components
import Loading from "./Loading";
// Types
import Job from "./Job";
import PageBtnContainer from "./PageBtnContainer";
// React Router DOM
import { useSearchParams } from "react-router-dom";

const JobsContainer = () => {
  const [searchParams] = useSearchParams("");

  const searchTerm = searchParams.get("searchTerm");
  const status = searchParams.get("status");
  const jobType = searchParams.get("jobType");
  const sort = searchParams.get("sort");
  const page = searchParams.get("page") || "1";

  const { data: jobs, isLoading } = useGetAllJobsQuery([
    { name: "searchTerm", value: searchTerm },
    { name: "status", value: status },
    { name: "jobType", value: jobType },
    { name: "sort", value: sort },
    { name: "page", value: page },
  ]);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.data.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {jobs.meta.total} job{jobs.data.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.data.map((job: IJob) => (
          <Job key={job._id} {...job} />
        ))}
      </div>
      {jobs.meta.totalPage > 1 && <PageBtnContainer meta={jobs.meta} />}
    </Wrapper>
  );
};

export default JobsContainer;
