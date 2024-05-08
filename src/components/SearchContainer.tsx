/* eslint-disable react-hooks/exhaustive-deps */
// React
import { ChangeEvent, useEffect, useState } from "react";
// CSS
import Wrapper from "./../assets/wrappers/SearchContainer";
// Components
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";
// Constants
import { JobType, Sort, Status } from "../constants";
// React Router DOM
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const initialState = {
  searchTerm: "",
  status: "all",
  jobType: "all",
  sort: "latest",
};

const SearchContainer = () => {
  const [formValues, setFormValues] = useState(initialState);
  const [searchParams, setSearchParams] = useSearchParams("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Handle Form and Fetch data
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues({ ...formValues, [name]: value });

    if (name === "sort") {
      searchParams.set("sort", Sort[value]);
    } else if (value === "all") {
      searchParams.delete(name);
    } else if (name === "searchTerm" && value === "") {
      searchParams.delete(name);
    } else {
      searchParams.set(name, value);
      searchParams.delete("page");
    }

    setSearchParams(searchParams);
  };

  // This will run only when the page for first time rendering
  useEffect(() => {
    const queryObject: Record<string, unknown> = {};
    for (const [key, value] of queryParams.entries()) {
      queryObject[key] = value;
    }

    setFormValues((prev) => ({ ...prev, ...queryObject }));
  }, []);

  // Handle Clear Filters
  const handleClearFilters = () => {
    searchParams.delete("searchTerm");
    searchParams.delete("status");
    searchParams.delete("jobType");
    searchParams.delete("sort");

    setSearchParams(searchParams);
    setFormValues(() => ({ ...initialState }));
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/* search position */}
          <FormRow
            type="text"
            name="searchTerm"
            labelText="Search Term"
            value={formValues.searchTerm}
            handleChange={handleChange}
            placeholder="Position name"
          />
          {/* search by status */}
          <FormRowSelect
            labelText="Job Status"
            name="status"
            value={formValues.status}
            handleChange={handleChange}
            list={["all", ...Status]}
          />
          {/* search by type */}
          <FormRowSelect
            labelText="Job Type"
            name="jobType"
            value={formValues.jobType}
            handleChange={handleChange}
            list={["all", ...JobType]}
          />
          {/* sort */}
          <FormRowSelect
            name="sort"
            value={formValues.sort}
            handleChange={handleChange}
            list={[...Object.keys(Sort)]}
          />
          <button
            className="btn btn-block btn-danger"
            onClick={handleClearFilters}
            type="button"
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
