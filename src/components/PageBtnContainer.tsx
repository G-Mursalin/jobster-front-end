// React Icons
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
// CSS
import Wrapper from "../assets/wrappers/PageBtnContainer";
// React Router DOM
import { useSearchParams } from "react-router-dom";

// Types
interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

const PageBtnContainer = ({ meta }: { meta: IMeta }) => {
  const { page, totalPage } = meta;
  const [searchParams, setSearchParams] = useSearchParams("");

  const pages = Array.from({ length: totalPage }, (_, index) => {
    return index + 1;
  });

  const handlePageNumberChange = (pageNumber: number) => {
    searchParams.set("page", String(pageNumber));
    setSearchParams(searchParams);
  };

  return (
    <Wrapper>
      <button className="prev-btn">
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              className={pageNumber === page ? "pageBtn active" : "pageBtn"}
              key={pageNumber}
              onClick={() => handlePageNumberChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button className="next-btn">
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
