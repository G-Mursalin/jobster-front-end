/* eslint-disable @typescript-eslint/no-explicit-any */
// React Icons
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
// React Router
import { Link } from "react-router-dom";
// CSS
import Wrapper from "../assets/wrappers/Job";
// React Redux
import JobInfo from "./JobInfo";
// Types
import { IJob } from "../types/job.types";
import { useDeleteJobMutation } from "../redux/features/job/jobApi";
import { toast } from "react-toastify";
import { useAppDispatch } from "../redux/hooks";
import { setEditJob } from "../redux/features/job/jobSlice";

const Job = (props: IJob) => {
  const { _id, position, company, jobLocation, status, jobType, createAt } =
    props;
  const [deleteJob, { isLoading }] = useDeleteJobMutation();
  const dispatch = useAppDispatch();

  // Handle Delete Functionality
  const handleDeleteJob = async (id: string) => {
    try {
      await deleteJob(id);
      toast.success("Job Deleted Successfully");
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  // Handle Edit Redux State
  const handleEditJobState = () => {
    dispatch(
      setEditJob({
        editJobId: _id,
        position,
        company,
        jobLocation,
        status,
        jobType,
      })
    );
  };

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo
            icon={<FaCalendarAlt />}
            text={new Date(createAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              onClick={handleEditJobState}
              to="/add-job"
              className="btn edit-btn"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDeleteJob(_id)}
              type="button"
              className="btn delete-btn"
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : "Delete"}
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
