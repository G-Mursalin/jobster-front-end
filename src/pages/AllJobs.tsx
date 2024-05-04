// React
import { Fragment } from "react";
// Components
import JobsContainer from "../components/JobsContainer";
import SearchContainer from "../components/SearchContainer";

const AllJobs = () => {
  return (
    <Fragment>
      <SearchContainer />
      <JobsContainer />
    </Fragment>
  );
};

export default AllJobs;
