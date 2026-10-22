
import type { IJob } from "../types/type";

interface JobCardProp {
  job: IJob
  handleSavedJob: (job:IJob) =>void;
}

const JobCard = ({ job, handleSavedJob }: JobCardProp) => {
  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl my-3">
      <div className="card-body gap-5 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="card-title text-lg font-bold leading-snug">
              {job.title}
            </h2>
            <p className="text-sm text-base-content/60 mt-2">
              {job.location}
            </p>
          </div>

          <div className="badge badge-primary badge-outline rounded-full px-3 py-3 shrink-0">
            {job.jobType}
          </div>
        </div>

        <div className="divider my-0"></div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <p className="text-xs text-base-content/50 mb-1">
              Salary Range
            </p>
            <p className="font-bold text-base text-primary">
              {job.salaryRange}
            </p>
          </div>

          <button
            onClick={()=> handleSavedJob(job)}
           className="btn btn-primary rounded-xl px-6 w-full sm:w-auto">
            Saved
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
