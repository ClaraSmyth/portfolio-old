import { useState } from 'react';
import { projectsArr } from '../data';

function useProjectsArr() {
  const [page, setPage] = useState(0);
  const currentProject = projectsArr[page];

  const pageNext = () => {
    setPage((prev) => (prev + 1) % projectsArr.length);
  };

  const pagePrev = () => {
    setPage((prev) => (prev - 1 < 0 ? projectsArr.length - 1 : prev - 1));
  };

  return {
    currentProject,
    pageNext,
    pagePrev,
  };
}

export default useProjectsArr;
