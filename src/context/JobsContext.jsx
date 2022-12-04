import { createContext, useContext, useEffect, useState } from "react";
import data from "../data/data.json";

const JobsContext = createContext();

export const useJobsContext = () => {
  return useContext(JobsContext);
};

const JobsContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState(data);
  const [filters, setFilters] = useState([]);

  const addFilter = (filter) => {
    if (filters.includes(filter)) return;
    setFilters((prevFilters) => {
      return [...prevFilters, filter];
    });
  };

  const removeFilter = (filter) => {
    setFilters(filters.filter((item) => item !== filter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const filterJobs = () => {
    if (filters.length === 0) {
      setJobs(data);
      return;
    }

    const newJobs = [];

    data.forEach((job) => {
      let count = 0;
      job.tags.forEach((tag) => {
        if (filters.includes(tag)) {
          count++;
        }
      });
      if (count === filters.length) {
        newJobs.push(job);
      }
    });

    setJobs(newJobs);
  };

  useEffect(() => {
    filterJobs();
  }, [filters]);

  return (
    <JobsContext.Provider
      value={{ jobs, filters, addFilter, removeFilter, clearFilters }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export default JobsContextProvider;
