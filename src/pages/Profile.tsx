/* eslint-disable @typescript-eslint/no-explicit-any */
// React
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
//  CSS
import Wrapper from "./../assets/wrappers/DashboardForm";
// Redux Toolkit
import {
  useGetMeQuery,
  useUpdateMeMutation,
} from "../redux/features/user/userApi";
//  Components
import Loading from "../components/Loading";
import FormRow from "../components/FormRow";
// React Tostify
import { toast } from "react-toastify";

const Profile = () => {
  const { data, isLoading: getMeIsLoading } = useGetMeQuery(undefined);
  const [updateMe, { isLoading: updateIsLoading }] = useUpdateMeMutation();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    location: "",
  });

  // Handle Update User Data
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await updateMe({ name: userData.name, location: userData.location });
      toast.success("User Profile Updated Successfully");
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  // Handle from State
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setUserData((prev) => ({
      ...prev,
      name: data?.data?.name || "",
      email: data?.data?.email || "",
      location: data?.data?.location || "",
    }));
  }, [data?.data?.name, data?.data?.email, data?.data?.location]);

  if (getMeIsLoading) {
    return <Loading center={true} />;
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>

        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />

          <FormRow
            type="email"
            name="email"
            labelText="email (You can't change your email)"
            value={userData.email}
            handleChange={handleChange}
            disabled={true}
          />
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
          <button
            className="btn btn-block"
            type="submit"
            disabled={updateIsLoading}
          >
            {updateIsLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
