import { useJobsContext } from "../context/JobsContext";

const FilterButton = ({ value }) => {
  const { addFilter } = useJobsContext();

  return (
    <button
      className="bg-[var(--clr-neutral-200)] text-[var(--clr-primary-500)] font-bold rounded px-2 py-[3px]"
      onClick={() => addFilter(value)}
    >
      {value}
    </button>
  );
};

export default FilterButton;
