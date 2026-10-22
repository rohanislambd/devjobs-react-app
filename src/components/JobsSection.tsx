import type { IJob } from "../types/type";
import JobCard from "./JobCard";
import SavedJobCard from "./SavedJobCard";

interface JobsSectionProps {
  jobsData: IJob[];
  savedJobs: IJob[];
  setSavedJobs: React.Dispatch<React.SetStateAction<IJob[]>>;
}

const JobsSection = ({
  jobsData,
  savedJobs,
  setSavedJobs,
}: JobsSectionProps) => {
  const handleSavedJob = (job: IJob) => {
    // console.log(job);
    const filterJobs =  savedJobs.filter(el =>  el.id !== job.id )
    const updatedJob = [...filterJobs, job];
    setSavedJobs(updatedJob);

  };
    // console.log(savedJobs);

  const handleRemoveJob = (job:IJob) =>{
    // console.log(job);
    const filterJobs = savedJobs.filter(el => el.id !== job.id);
    // console.log(filterJobs);
    setSavedJobs(filterJobs)
  }

  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between gap-6 px-4 md:px-0">
      {/* Latest Job */}
      <div className="md:w-3/4">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">Lastest Jobs</h3>
          <p
            className="text-slate-400
                    "
          >
           {jobsData.length} role found
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 ">
          {jobsData.map((item: IJob) => (
            <JobCard key={item.id} job={item} handleSavedJob={handleSavedJob} savedJobs={savedJobs} />
          ))}
        </div>
      </div>
      {/* Saved Jobs */}
      <div className="md:w-1/4">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">Saved Jobs</h3>
          <p
            className="text-slate-400
                    "
          >
           {savedJobs.length} saved
          </p>
        </div>
        <div className="border border-slate-200 rounded-xl p-3">
            {savedJobs.length >0 ?
                savedJobs.map(item => <SavedJobCard
                key={item.id} job={item} handleRemoveJob={handleRemoveJob} />): <p className="text-center text-2xl font-bold text-blue-400 border rounded-2xl py-8">No Jobs saved</p>
            }
        </div>
      </div>
    </div>
  );
};

export default JobsSection;
