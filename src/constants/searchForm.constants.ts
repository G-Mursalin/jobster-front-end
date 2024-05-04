export const Status = ["pending", "interview", "declined"] as const;

export const JobType = [
  "full-time",
  "part-time",
  "remote",
  "internship",
] as const;

export const Sort: Record<string, string> = {
  latest: "createdAt",
  oldest: "-createdAt",
  a_z: "position",
  z_a: "-position",
} as const;
