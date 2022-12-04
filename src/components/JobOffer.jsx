import FilterButton from "./FilterButton";

const JobOffer = ({
  logo,
  name,
  isNew,
  isFeatured,
  position,
  date,
  contract,
  location,
  tags,
}) => {
  const newBadge = (
    <div className="bg-[var(--clr-primary-500)] text-white rounded-xl px-2 text-center">
      NEW!
    </div>
  );
  const featuredBadge = (
    <div className="bg-[var(--clr-neutral-900)] text-white rounded-xl px-2 ml-2">
      FEATURED
    </div>
  );

  return (
    <div
      className={
        isFeatured
          ? "bg-white my-12 rounded-md relative px-4 py-10 md:py-8 border-l-4 border-[var(--clr-primary-500)] max-w-[1700px] md:flex md:justify-between"
          : "bg-white my-12 rounded-md relative px-4 py-10 md:py-8 md:flex md:justify-between max-w-[1700px]"
      }
    >
      <div className="md:flex">
      <img
        src={logo}
        alt="logo"
        className="w-12 absolute left-4 -top-6 md:relative md:left-0 md:top-0 md:w-24"
      />

      <div className="flex flex-col md:px-8">
        <div className="flex items-center">
          <p className="mr-6 text-[var(--clr-primary-500)] font-bold">{name}</p>
          {isNew && newBadge}
          {isFeatured && featuredBadge}
        </div>

        <p className="text-[var(--clr-neutral-900)] font-bold py-2">
          {position}
        </p>

        <ul className="flex items-center gap-6 text-[var(--clr-neutral-700)] border-b-[1px] border-[var(--clr-neutral-700)] pb-4 list-disc md:border-0">
          <li className="list-none">{date}</li>
          <li className="">{contract}</li>
          <li className="">{location}</li>
        </ul>
      </div>
      </div>

      <div className="flex items-center flex-wrap gap-4 pt-4">
        {tags.map((item, id) => (
          <FilterButton value={item} key={id} />
        ))}
      </div>
    </div>
  );
};

export default JobOffer;
