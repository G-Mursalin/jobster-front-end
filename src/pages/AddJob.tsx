/* eslint-disable @typescript-eslint/no-explicit-any */
// React
import { ChangeEvent, FormEvent } from "react";
// CSS
import Wrapper from "./../assets/wrappers/AddJobForm";
// React Tostify
import { toast } from "react-toastify";
// Components
import FormRow from "../components/FormRow";
import FormRowSelect from "../components/FormRowSelect";
import { JobType, Status } from "../constants";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  clearValues,
  handleChange,
  selectCurrentJobStates,
} from "../redux/features/job/jobSlice";
import {
  useCreateJobMutation,
  useEditJobMutation,
} from "../redux/features/job/jobApi";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const {
    isEditing,
    editJobId,
    position,
    company,
    jobLocation,
    status,
    jobType,
  } = useAppSelector(selectCurrentJobStates);
  const dispatch = useAppDispatch();
  const [createJob, { isLoading }] = useCreateJobMutation();
  const [editJob] = useEditJobMutation();
  const navigate = useNavigate();

  // Send to backend
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error("Please Fill Out All Fields");
      return;
    }

    try {
      if (isEditing) {
        await editJob({
          editJobId,
          position,
          company,
          jobLocation,
          status,
          jobType,
        });

        toast.success("Job Updated Successfully");
      } else {
        await createJob({
          position,
          company,
          jobLocation,
          status,
          jobType,
        }).unwrap();

        toast.success("Job Added Successfully");
      }

      // Reset Form State an redirect
      dispatch(clearValues());
      navigate("/all-jobs");
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  // Handle Form Data
  const handleJobInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    // Set Form Values to Redux State
    dispatch(handleChange({ name, value }));
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>

        <div className="form-center">
          {/* Position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* Company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* Location */}
          <FormRow
            type="text"
            value={jobLocation}
            labelText="job location"
            name="jobLocation"
            handleChange={handleJobInput}
          />

          {/* Job Status */}
          <FormRowSelect
            name="status"
            list={[...Status]}
            handleChange={handleJobInput}
            value={status}
            labelText="status"
          />

          {/* Job Type */}
          <FormRowSelect
            name="jobType"
            list={[...JobType]}
            handleChange={handleJobInput}
            value={jobType}
            labelText="jobType"
          />

          {/* btn container */}
          <div className="btn-container">
            <button
              onClick={() => dispatch(clearValues())}
              type="button"
              className="btn btn-block clear-btn"
            >
              clear
            </button>
            {isEditing ? (
              <button
                disabled={isLoading}
                type="submit"
                className="btn btn-block submit-btn"
              >
                {isLoading ? "updating..." : "update"}
              </button>
            ) : (
              <button
                disabled={isLoading}
                type="submit"
                className="btn btn-block submit-btn"
              >
                {isLoading ? "Sending..." : "submit"}
              </button>
            )}
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
