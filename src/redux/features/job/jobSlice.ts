import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { JobType, Status } from "../../../constants";

// Define a type for the slice state
type TJobState = {
  position: string;
  company: string;
  jobLocation: string;
  status: string;
  jobType: string;
  isEditing: boolean;
  editJobId: string;
};

// Initial state
const initialState: TJobState = {
  position: "",
  company: "",
  jobLocation: "",
  status: Status[0],
  jobType: JobType[0],
  isEditing: false,
  editJobId: "",
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (
      state: Record<string, unknown>,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name] = value;
    },

    clearValues: () => {
      return {
        ...initialState,
      };
    },

    setEditJob: (
      state,
      action: PayloadAction<Omit<TJobState, "isEditing">>
    ) => {
      return { ...state, isEditing: true, ...action.payload };
    },
  },
});

export const { handleChange, clearValues, setEditJob } = jobSlice.actions;

export default jobSlice.reducer;

export const selectCurrentJobStates = (state: RootState) => state.job;
