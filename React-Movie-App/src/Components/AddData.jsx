import { useState } from "react";

const AddData = () => {
  const [data, setData] = useState({
    title: "",
    year: "",
    type: "",
    id: "",
    poster: "",
    rating: "",
  });

  function handleChange(event) {
    const newData = {
      ...data,
      [event.target.name]: event.target.value,
    };
    setData(newData)
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="w-full border-2 flex justify-center items-center">
      <div className="border-2 border-solid border-red-500 w-[30%]">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col px-10 py-5 gap-5"
        >
          <input
            type="text"
            name="title"
            id=""
            placeholder="Add Title"
            onChange={handleChange}
            value={data.title}
            className="border-2 border-black border-solid rounded-sm"
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            onChange={handleChange}
            value={data.year}
            className="border-2 border-black border-solid rounded-sm"
          />
          <input
            type="text"
            name="type"
            placeholder="Type"
            onChange={handleChange}
            value={data.type}
            className="border-2 border-black border-solid rounded-sm"
          />
          <input
            type="text"
            name="id"
            placeholder="ID"
            onChange={handleChange}
            value={data.id}
            className="border-2 border-black border-solid rounded-sm"
          />
          <input
            type="text"
            name="poster"
            placeholder="Poster"
            onChange={handleChange}
            value={data.poster}
            className="border-2 border-black border-solid rounded-sm"
          />
          <input
            type="text"
            name="rating"
            placeholder="Rating"
            onChange={handleChange}
            value={data.rating}
            className="border-2 border-black border-solid rounded-sm"
          />

          <button type="submit" className="bg-red-300 rounded-full py-2">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddData;
