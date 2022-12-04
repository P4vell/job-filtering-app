import Filters from "./components/Filters";
import JobsList from "./components/JobsList";
import JobsContextProvider from "./context/JobsContext";

const App = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="w-full max-h-[200px] bg-[var(--clr-primary-500)] absolute">
        <picture>
          <source
            media="(min-width: 1000px)"
            srcSet="/images/bg-header-desktop.svg"
          />
          <img
            src="/images/bg-header-mobile.svg"
            alt=""
            className="w-full h-auto max-h-[200px] object-cover"
          />
        </picture>
      </div>

      <JobsContextProvider>
        <Filters />
        <JobsList />
      </JobsContextProvider>
    </div>
  );
};

export default App;
