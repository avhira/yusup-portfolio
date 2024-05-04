import ReactPaginate from 'react-paginate';

const Pagination = ({ setItems, pageCount, fetchDatas, halaman, setHalaman }) => {
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1; // data = indeks
    setHalaman(currentPage - 1);
    const itemsPage = await fetchDatas(currentPage);
    setItems(itemsPage);
  };
  return (
    <>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={`page-item ${halaman === 0 ? 'hidden' : ''}`}
        previousLinkClassName={'page-link'}
        nextClassName={`page-item ${halaman === pageCount - 1 ? 'hidden' : ''}`}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </>
  );
};

export default Pagination;
