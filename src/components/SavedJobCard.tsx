import type { IJob } from "../types/type";

interface savedJobsCardProps{
     job: IJob ;
     handleRemoveJob: (job:IJob)=>void
}


const SavedJobCard = ({ job , handleRemoveJob}: savedJobsCardProps) => {
  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl my-3">
      <div className="card-body gap-5 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="card-title text-lg font-bold leading-snug">
              {job.title}
            </h2>
            <p className="text-sm text-base-content/60 mt-2">{job.location}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <button 
            onClick={()=> handleRemoveJob(job)}
          className="btn btn-outline text-red-500 border-red-500  font-bold  rounded-xl px-6 w-full">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedJobCard;
