import { useState } from "react"
import AddData from "../Components/AddData"
import MovieList from "../Components/MovieList"

const DisplayTab = () => {
    const [setOff, setOn] = useState("Add Movie")
    const [show, setShow] = useState(false)


    function Btn(){
        setOn((prevValue)=>(prevValue === "Add Movie" ? "MovieList" : "Add Movie"))
        setShow((prevValue)=>!prevValue)
    }

  return (
    <section className="">
      <div className="flex flex-col gap-10">
        <button onClick={Btn}>
            {setOff}
        </button>

        <div>
        {show  ? <AddData/> : <MovieList/>}
        </div>
    </div>
    </section>
  )
}

export default DisplayTab