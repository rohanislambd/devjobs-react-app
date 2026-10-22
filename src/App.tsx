import { Suspense } from "react";
import "./App.css";

import MainComponent from "./components/MainComponent";
import type { IJob } from "./types/type";

const jobsPromis:Promise<IJob[]>  = fetch(
  "https://raw.githubusercontent.com/rohanislambd/devjobs-react-app/refs/heads/main/public/jobs.json",
).then((res) => res.json());

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <MainComponent jobsPromis={jobsPromis} />
      </Suspense>
    </div>
  );
}

export default App;
