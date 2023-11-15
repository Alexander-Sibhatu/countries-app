import React from 'react';

type CountriesProbs = {
    totalCountries: number,
    countriesPerPage: number,
    currentPage: number,
    paginate: (pageNumber: number) => void; 
};

const Paginate = ({ countriesPerPage, totalCountries, currentPage, paginate }: CountriesProbs) => {
   const pageNumbers: number[] = [];
 
   for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
      pageNumbers.push(i);
   }

   const renderPageNumbers = () => {
    const visiblePages = 7; //Adjust as needed
    const halfVisible = Math.floor(visiblePages/2);
    const startPage = Math.max(1, currentPage - halfVisible); 
    const endPage = Math.min(pageNumbers.length, startPage + visiblePages - 1);

    const pageItems = [];

    if(currentPage > 1){
        pageItems.push(
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
            </li>
        )
    }
    pageItems.push(
        ...pageNumbers.slice(startPage - 1, endPage).map((number) => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))
      );

      if (currentPage < pageNumbers.length) {
        pageItems.push(
          <li key="next" className="page-item">
            <button className="page-link" onClick={() => paginate(currentPage + 1)}>
              Next
            </button>
          </li>
        );
      };

      return pageItems
   };
   
   return (
    <div className="pagination-container">
        <ul className="pagination">{renderPageNumbers()}</ul>
    </div>
   )
}
export default Paginate;