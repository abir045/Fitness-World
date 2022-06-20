import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 0; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="hidden sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing
            <span className="font-medium p-2">
              {currentPage * postsPerPage - 10}
            </span>
            to
            <span className="font-medium p-2">
              {currentPage * postsPerPage}
            </span>
            of <span className="font-medium">{totalPosts}</span> results
          </p>
        </div>

        <nav className="block" aria-label="Pagination">
          <ul className="flex  rounded list-none flex-wrap">
            <li className="flex m-2 p-2">
              {pageNumbers.map((number) => (
                <a
                  className={
                    currentPage === number
                      ? "bg-blue border-red-300 text-red-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-bold"
                      : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-bold"
                  }
                  href="#"
                  aria-current="page"
                  onClick={() => {
                    paginate(number);
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                >
                  {number}
                </a>
              ))}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
