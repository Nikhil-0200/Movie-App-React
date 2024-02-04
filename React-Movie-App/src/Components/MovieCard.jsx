const MovieCard = ({id, title, poster, rating, type, year}) => {
  return (
    <section className="shadow-2xl w-full px-5 py-5 min-h-52 flex justify-center items-center gap-7">
      
        <div className=" w-[120px] h-full border-2" >
            <img 
            className="w-full h-full object-fill"
            src={poster} 
            alt="Movie Poster"
            width={200}
            height={100}
            />
        </div>
        <div className="border-2 h-full w-3/4 flex flex-col justify-evenly items-start pl-4">
            <p className="font-bold text-xl">{title}</p>
            <p>Year: {year}</p>
            <p>Rating: {rating}</p>
            <p>ID: {id}</p>
            <p>Type: {type}</p>
        </div>
    </section>
  )
}

export default MovieCard