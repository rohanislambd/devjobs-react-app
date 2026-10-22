import { use, useState } from "react";
import FilterSection from "./FilterSection";
import JobsSection from "./JobsSection";
import Navbar from "./Navbar";
import type { IJob } from "../types/type";

interface MainComponentProps  {
    jobsPromis: Promise<IJob[]>
}

const MainComponent = ({jobsPromis}:MainComponentProps ) => {
    const data:IJob[] = use(jobsPromis);
    const [jobsData, setJobData] =useState(data);

    const [savedJobs, setSavedJobs] = useState<IJob[]>([]);

    const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend" | "design">("all");
    const [searchText , setSearchText] = useState("");

    // tab switch
    const handleTabChange = (type: "all" |"frontend"|"backend"| "design") =>{
      setActiveTab(type);
      if(type === "frontend"){
        const filterJObs = data.filter(el => el.field.toLowerCase() === "frontend");
        // console.log(filterJObs);
        setJobData(filterJObs);
      }else if(type === "backend"){
        const filterJobs = data.filter(el => el.field.toLowerCase() === "backend");
         setJobData(filterJobs)
      }else if(type === "design"){
        const filterJobs = data.filter(el => el.field.toLowerCase() === "design");
         setJobData(filterJobs)
      }else{
        setJobData(data);
      }
    }

    // Search
    const handleSearch = (value: string) =>{
      setSearchText(value)
      const filterJobs = data.filter((job) =>
    job.title.toLowerCase().includes(value.toLowerCase()))
      setJobData(filterJobs)
    }

  return (
    <>
      <Navbar savedJobs={savedJobs} />

      <FilterSection handleTabChange={handleTabChange} activeTab={activeTab} handleSearch={handleSearch} searchText={searchText}/>
      <JobsSection jobsData={jobsData} savedJobs={savedJobs} setSavedJobs={setSavedJobs} />
    </>
  );
};

export default MainComponent;
