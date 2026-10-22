import type { IJob } from "../types/type";
import JobCard from "./JobCard";

const JobsSection = ({jobsData}:{jobsData:IJob[]}) => {

    const handleSavedJob = (job:IJob) =>{
        console.log(job);
    }
    
    return (
        <div className='container mx-auto flex justify-between gap-6'>
            {/* Latest Job */}
            <div className='w-3/4'>
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">Lastest Jobs</h3>
                    <p className="text-slate-400
                    ">6 role found</p>
                </div>
                <div className="grid grid-cols-2 gap-5 ">
                    {
                        jobsData.map((item:IJob) => <JobCard job={item} handleSavedJob={handleSavedJob}  />)
                    }
                </div>
            </div>
            {/* Saved Jobs */}
            <div className='w-1/4'>
               <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">Saved Jobs</h3>
                    <p className="text-slate-400
                    ">6 saved</p>
                </div>
            </div>
        </div>
    );
};

export default JobsSection;