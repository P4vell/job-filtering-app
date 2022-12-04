import JobOffer from "./JobOffer";
import { useJobsContext } from "../context/JobsContext";

const JobsList = () => {
  const { jobs, filters } = useJobsContext();

  return (
    <div className={filters.length > 0 ? "justify-center p-8 w-full max-w-[1500px]" : "justify-center p-8 pt-40 md:pt-48 w-full max-w-[1500px]"}>
      {jobs.map((item, id) => (
        <JobOffer
          key={id}
          logo={item.logo}
          name={item.company}
          isNew={item.new}
          isFeatured={item.featured}
          position={item.position}
          date={item.postedAt}
          contract={item.contract}
          location={item.location}
          tags={item.tags}
        />
      ))}
    </div>
  );
};

export default JobsList;
