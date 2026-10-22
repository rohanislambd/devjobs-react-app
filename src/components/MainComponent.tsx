import { use } from "react";
import FilterSection from "./FilterSection";
import JobsSection from "./JobsSection";
import Navbar from "./Navbar";
import type { IJob } from "../types/type";

interface MainComponentProps  {
    jobsPromis: Promise<IJob[]>
}

const MainComponent = ({jobsPromis}:MainComponentProps ) => {
    const jobsData:IJob[] = use(jobsPromis);
    
  return (
    <>
      <Navbar />

      <FilterSection />
      <JobsSection jobsData={jobsData}/>
    </>
  );
};

export default MainComponent;
