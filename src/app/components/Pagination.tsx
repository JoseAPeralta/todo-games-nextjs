import Link from "next/link";
import usePagination from "../hooks/usePagination";

export type PaginationProps = {
  totalItems: number;
  currentPage: number;
  renderPageLink: (page: number) => string;
  itemsPerPage?: number;
};

export const dotts = "...";

const Pagination = ({
  totalItems,
  currentPage,
  itemsPerPage = 10,
  renderPageLink,
}: PaginationProps) => {
  totalItems = Number(totalItems);
  currentPage = Number(currentPage);
  itemsPerPage = Number(itemsPerPage);
  const pages = usePagination(totalItems, currentPage, itemsPerPage);

  return (
    <div className="flex items-center justify-center my-8">
      {pages.map((pageNumber, i) =>
        pageNumber === dotts ? (
          <span
            key={i}
            className="px-4 py-2 rounded-full text-sm font-semibold "
          >
            {pageNumber}
          </span>
        ) : (
          <Link
            key={i}
            href={renderPageLink(pageNumber as number)}
            className={`${
              pageNumber === currentPage
                ? "text-amber-500 underline underline-offset-4"
                : "text-slate-200"
            } px-2 py-2 mx-1 rounded-full text-sm font-semibold `}
          >
            {pageNumber}
          </Link>
        )
      )}
    </div>
  );
};

export default Pagination;
