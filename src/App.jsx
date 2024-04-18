import { useEffect, useRef, useState } from "react"
import Container from "./components/Today"
import Sidebar from "./components/Sidebar"
import { Route, Routes } from "react-router-dom"
import Important from "./components/Important"
import Work from "./components/Work"
import Personal from "./components/Personal"
import House from "./components/House"



function App() {

  const date = new Date()
  const Week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const currWeek = Week[date.getDay()]
  const month = ['January', 'febraury','March','April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const currmonth = month[date.getMonth()]

  const [items, setItems] = useState([])
  const [impitems, setImpitems] = useState([])
  const [workitems, setWorkitems] = useState([])
  const [peritems, setPeritems] = useState([])
  const [hitems, setHitems] = useState([])
  const [name, setName] = useState('')

  const [search, setSearch] = useState('')
  const [searchitems, setSearchitems] = useState([])
  const [searchimp, setSearchimp] = useState([])
  const [searchwork, setSearchwork] = useState([])
  const [searchper, setSearchper] = useState([])
  const [searchh, setSearchh] = useState([])

  useEffect(() => {
    const filterresult = items.filter((val) => ((val.Name).toLowerCase()).includes(search.toLowerCase()))
    setSearchitems(filterresult)
  },[items, search]) 

  useEffect(() => {
    const filterresult = impitems.filter((val) => ((val.Name).toLowerCase()).includes(search.toLowerCase()))
    setSearchimp(filterresult)
  },[impitems, search]) 

  useEffect(() => {
    const filterresult = workitems.filter((val) => ((val.Name).toLowerCase()).includes(search.toLowerCase()))
    setSearchwork(filterresult)
  },[workitems, search]) 

  useEffect(() => {
    const filterresult = peritems.filter((val) => ((val.Name).toLowerCase()).includes(search.toLowerCase()))
    setSearchper(filterresult)
  },[peritems, search]) 

  useEffect(() => {
    const filterresult = hitems.filter((val) => ((val.Name).toLowerCase()).includes(search.toLowerCase()))
    setSearchh(filterresult)
  },[hitems, search]) 


 


  return (
    <div className="d-flex vh-100 gap-md-5">
      <Sidebar 
        items={items} 
        impitems = {impitems}
        workitems = {workitems}
        peritems = {peritems}
        hitems = {hitems}
        search = {search}
        setSearch = {setSearch}
      />
      <Routes>
        <Route path="/" element = {
          <Container 
            items={searchitems}
            setItems = {setItems}
            name ={name}
            setName = {setName}
            date = {date}
            currWeek={currWeek}
            currmonth={currmonth}
        />
        } />
        <Route path="/important" element = {
          <Important 
            impitems = {searchimp}
            setImpitems = {setImpitems}
            name ={name}
            setName = {setName}
            date = {date}
            currWeek={currWeek}
            currmonth={currmonth}
          />
        } />
        <Route path="/work" element = {
          <Work 
            workitems = {searchwork}
            setWorkitems = {setWorkitems}
            name ={name}
            setName = {setName}
            date = {date}
            currWeek={currWeek}
            currmonth={currmonth}            
          />
        } />
        <Route path="/personal" element = {
          <Personal 
            peritems = {searchper}
            setPeritems = {setPeritems}
            name ={name}
            setName = {setName}
            date = {date}
            currWeek={currWeek}
            currmonth={currmonth} 
          />
        } />
        <Route path="/house" element = {
          <House 
            hitems = {searchh}
            setHitems = {setHitems}
            name ={name}
            setName = {setName}
            date = {date}
            currWeek={currWeek}
            currmonth={currmonth}           
          />
        } />
      </Routes>
      
      
    </div>
  )
}

export default App
