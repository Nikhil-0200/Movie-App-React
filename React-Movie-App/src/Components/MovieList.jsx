import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import AddData from "./AddData";

async function PostMovie(url, data){
    try {
      let res = await fetch(url, {
        method: "POST",
        headers:{
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
  
      let finalData = await res.json()
      return finalData
    } catch (error) {
      console.log(error);
    }
  }

const MovieList = () => {
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)
const [data, setData] = useState([])

    async function FetchData(){
        setLoading(true)

        try {
            let res = await fetch("http://localhost:3000/movies")
        let finalData = await res.json()

        setData(finalData)
        setLoading(false)
        setError(false)
        } catch (error) {
            setError(true)
            setLoading(false)
            console.log(error);
        }
    }

async function addNewMovie(newData){
    try {
        PostMovie("http://localhost:3000/movies", newData)
        FetchData()
    } catch (error) {
        console.log(error);
    }
}




    useEffect(()=>{
        FetchData()
    }, [])


    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>Something Went Wrong</h1>
    }

  return (
    <section>
        <div className="w-full grid grid-cols-3 gap-5">
        {data.map((ele)=>(
            <div key={ele.id}>
                <MovieCard 
            {...ele}
            />
            </div>
        ))}
        
    </div>
    </section>
  )
}

export default MovieList