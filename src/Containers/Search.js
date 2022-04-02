import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { SearchQuery } from "../appollo/search";
import ScrollComponent from "../Components/ScrollComponent";
import { debounce } from "./../utils/index";
import GifComponent from "./../Components/GifComponent";

function Search() {
  const [val, setVal] = useState("");
  const [setSearch, { data, fetchMore }] = useLazyQuery(SearchQuery);

  const callApi = (e) => {
    setVal(e.target.value);
    setSearch({ variables: { q: e.target.value, offset: 0, limit: 24 } });
  };

  const nextApi = () => {
    if (!data?.search?.length) return;
    fetchMore({
      query: SearchQuery,
      variables: {
        offset: data.search.length,
        limit: 24,
        q: val,
      },
    });
  };

  const debounceFn = debounce(callApi, 2000);

  return (
    <div className="flex flex-col items-center justify-center pt-4">
      <input
        className="w-1/2 xs:w-3/4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Search"
        onChange={debounceFn}
      />
      <ScrollComponent cb={nextApi} hasData={data?.search?.length}>
        <div className="grid grid-cols-4 gap-6 mt-4 p-2">
          {data?.search?.map((gifs) => (
            <GifComponent
              key={gifs.id}
              url={gifs.images.original.webp}
              staticUrl={gifs.images.original_still.url}
            />
          ))}
        </div>
      </ScrollComponent>
    </div>
  );
}

export default Search;
