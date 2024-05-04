export type TStatus = "pending" | "interview" | "declined";
export type TJobType = "full-time" | "part-time" | "remote" | "internship";

export interface IJob {
  _id: string;
  position: string;
  company: string;
  jobLocation: string;
  status: TStatus;
  jobType: TJobType;
  createAt: string;
  updatedAt: string;
}
