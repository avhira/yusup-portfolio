import { useState, useEffect } from 'react';
import { projects } from '@/data/projects.js';
import Pagination from '@/component/pagination';
import Back from '@/utilities/Back.jsx';
import Card from '@/component/Projects/Card';

export default function Projects() {
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [halaman, setHalaman] = useState(0);
  const limit = 3;

  useEffect(() => {
    setPageCount(Math.ceil(projects.length / limit));
    setItems(projects.slice(0, limit));
  }, []);

  const fetchDatas = (pageNumber) => {
    const startIndex = (pageNumber - 1) * limit;
    const endIndex = startIndex + limit;
    const data = projects.slice(startIndex, endIndex);
    return Promise.resolve(data);
  };
  return (
    <>
      <Back />
      <div className="container">
        <h1 className="title-project">Portfolio</h1>
        <Card projects={items} />
      </div>
      <Pagination
        setItems={setItems}
        pageCount={pageCount}
        fetchDatas={fetchDatas}
        halaman={halaman}
        setHalaman={setHalaman}
      />
    </>
  );
}
