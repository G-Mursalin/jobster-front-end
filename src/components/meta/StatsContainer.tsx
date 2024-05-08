// Icons
import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from "react-icons/fa";
// CSS
import Wrapper from "./../../assets/wrappers/StatsContainer";
// Components
import StatItem from "./StatItem";

type TStatsContainerProps = {
  data: { pending: number; interview: number; declined: number };
};

const StatsContainer = ({ data }: TStatsContainerProps) => {
  const defaultStats = [
    {
      title: "pending applications",
      count: data.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "interviews scheduled",
      count: data.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: data.declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
