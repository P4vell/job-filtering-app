import { useJobsContext } from "../context/JobsContext";

const Filters = () => {
  const { filters, removeFilter, clearFilters } = useJobsContext();

  if (filters.length === 0) return null;

  return (
    <div className="px-8 relative z-10 pt-28 w-full max-w-[1550px]">
      <div className="bg-white rounded p-4 flex items-center justify-between">
        <div className="flex items-center flex-wrap gap-4">
          {filters.map((item, id) => (
            <div key={id} className="flex items-center rounded h-6 overflow-hidden">
              <div className="bg-[var(--clr-neutral-200)] text-[var(--clr-primary-500)] font-bold px-2">
                <span className="py-2">{item}</span>
              </div>
              <button onClick={() => removeFilter(item)} className="bg-[var(--clr-primary-500)] h-full px-2">
                <img src="/images/icon-remove.svg" alt="" />
              </button>
            </div>
          ))}
        </div>
        <div>
          <button className="text-[var(--clr-neutral-700)]" onClick={clearFilters}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
