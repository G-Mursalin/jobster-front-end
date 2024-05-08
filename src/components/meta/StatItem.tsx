// CSS
import { ReactNode } from "react";
import Wrapper from "../../assets/wrappers/StatItem";

type TStatItemProps = {
  count: number;
  title: string;
  icon: ReactNode;
  color: string;
  bcg: string;
};

const StatItem = ({ count, title, icon, color, bcg }: TStatItemProps) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  );
};

export default StatItem;
