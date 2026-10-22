import { use, useState } from "react";
import FilterSection from "./FilterSection";
import JobsSection from "./JobsSection";
import Navbar from "./Navbar";
import type { IJob } from "../types/type";

interface MainComponentProps  {
    jobsPromis: Promise<IJob[]>
}

const MainComponent = ({jobsPromis}:MainComponentProps ) => {
    const jobsData:IJob[] = use(jobsPromis);

    const [savedJobs, setSavedJobs] = useState<IJob[]>([]);
    
  return (
    <>
      <Navbar savedJobs={savedJobs} />

      <FilterSection />
      <JobsSection jobsData={jobsData} savedJobs={savedJobs} setSavedJobs={setSavedJobs} />
    </>
  );
};

export default MainComponent;
