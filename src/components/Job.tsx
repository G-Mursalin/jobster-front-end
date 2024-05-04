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

const Job = (props: IJob) => {
  const { position, company, jobLocation, status, jobType, createAt } = props;

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
            <Link to="/add-job" className="btn edit-btn">
              Edit
            </Link>
            <button type="button" className="btn delete-btn">
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
