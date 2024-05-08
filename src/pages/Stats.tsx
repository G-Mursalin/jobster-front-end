import { Fragment } from "react";
import StatsContainer from "../components/meta/StatsContainer";
import ChartsContainer from "../components/meta/ChartsContainer";
import {
  useGetCountedJobsStatsQuery,
  useGetMonthlyStatsQuery,
} from "../redux/features/meta/metaApi";
import Loading from "../components/Loading";

const Stats = () => {
  const { data, isLoading: isCountedJobsStatsLoading } =
    useGetCountedJobsStatsQuery(undefined);

  const { data: monthlyApplications, isLoading: isGetMonthlyStatsLoading } =
    useGetMonthlyStatsQuery(undefined);

  if (isCountedJobsStatsLoading || isGetMonthlyStatsLoading) {
    return <Loading center={true} />;
  }

  return (
    <Fragment>
      <StatsContainer data={data.data} />
      <ChartsContainer monthlyApplications={monthlyApplications.data} />
    </Fragment>
  );
};

export default Stats;
