interface FilterSectionProps {
  handleTabChange: (type: "all" | "frontend" | "backend" | "design") => void;
  activeTab: "all" | "frontend" | "backend" | "design";
}

const FilterSection = ({ handleTabChange, activeTab }: FilterSectionProps) => {
  return (
    <div className="container mx-auto my-10 px-4">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Find Your Next Developer Role
        </h1>
        <p className="mt-3 text-base-content/60">
          Search and save the jobs you like.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 rounded-2xl border border-base-300 bg-base-100 p-5 md:p-6 shadow-sm">
        {/* Search */}
        <label className="input input-bordered flex items-center gap-3 w-full md:w-[60%]  rounded-xl">
          <svg
            className="h-5 w-5 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>

          <input type="search" placeholder="Search jobs..." className="grow" />
        </label>

        {/* TAB section */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => handleTabChange("all")}
            className={`btn ${activeTab === "all" ? "btn-primary" : "btn-ghost"} border border-base-300 rounded-full px-6`}
          >
            All
          </button>
          <button
            onClick={() => handleTabChange("frontend")}
            className={`btn ${activeTab === "frontend" ? "btn-primary" : "btn-ghost"} border border-base-300 rounded-full px-6`}
          >
            Frontend
          </button>
          <button
            onClick={() => handleTabChange("backend")}
            className={`btn ${activeTab === "backend" ? "btn-primary" : "btn-ghost"} border border-base-300 rounded-full px-6`}
          >
            Backend
          </button>
          <button
            onClick={() => handleTabChange("design")}
            className={`btn ${activeTab === "design" ? "btn-primary" : "btn-ghost"} border border-base-300 rounded-full px-6`}
          >
            Design
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
