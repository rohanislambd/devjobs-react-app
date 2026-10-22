import './App.css'
import FilterSection from './components/FilterSection'
import JobsSection from './components/JobsSection'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      {/* navbar */}
      <Navbar/>

      <FilterSection/>
      <JobsSection/>
   
    </div>
  )
}

export default App
