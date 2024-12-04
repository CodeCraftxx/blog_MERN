import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <form className="md:flex gap-3 md:grid-cols-none grid grid-cols-5">
        <input
          className="border border-gray-400 px-4 py-2 rounded-lg md:w-1/2 col-span-4"
          type="text"
          placeholder="Search a blog..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="px-4 py-2 border border-black rounded-md hover:bg-black hover:text-white" type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
