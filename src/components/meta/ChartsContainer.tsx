// CSS
import Wrapper from "../../assets/wrappers/ChartsContainer";
// Components
import BarChart from "./BarChart";

type TChartsContainerProps = {
  monthlyApplications: {
    _id: {
      month: number;
      year: number;
    };
    count: number;
    month: string;
    monthYear: string;
  }[];
};

const ChartsContainer = ({ monthlyApplications }: TChartsContainerProps) => {
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button> Bar Chart</button>
      <BarChart data={monthlyApplications} />
    </Wrapper>
  );
};

export default ChartsContainer;
