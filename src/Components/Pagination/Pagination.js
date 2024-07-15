import React, { useState } from "react";
import './Pagination.css';

const Pagination = ({totalRecords, recordsPerPage, setCurrentPage}) => {
    const [activeButton, setActiveButton] = useState(1);

    let pages = [];
    for(let i = 1; i<=Math.ceil(totalRecords/recordsPerPage); i++){
        pages.push(i);
    }

    const handlePageClick = (page) => {
        setCurrentPage(page);
        setActiveButton(page);
    }

    return(
        <div className="pagination">
            {
                pages.map((page, index) =>{
                    return <button key={index} className={`paginationButton ${activeButton === page ? 'active' : ''}`} onClick={() => handlePageClick(page)}>{page}</button>
                })
            }
        </div>
    )
}

export default Pagination;