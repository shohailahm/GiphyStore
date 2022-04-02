import { useQuery } from "@apollo/client";
import React from "react";
import GifComponent from "../Components/GifComponent";
import ScrollComponent from "../Components/ScrollComponent";
import { trendingQuery } from "./../appollo/trending";

function Home() {
  const { loading, error, data, fetchMore } = useQuery(trendingQuery, {
    variables: {
      offset: 0,
      limit: 24,
    },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const nextApi = () => {
    if (!data?.trending?.length) return;
    fetchMore({
      variables: {
        offset: data.trending.length,
      },
    });
  };
  return (
    <ScrollComponent cb={nextApi} hasData={data?.trending?.length}>
      <div className="grid grid-cols-4 lg:grid-cols-6 gap-6 mt-4 p-2">
        {data?.trending?.map((gifs) => (
          <GifComponent
            key={gifs.id}
            url={gifs.images.original.webp}
            staticUrl={gifs.images.original_still.url}
          />
        ))}
      </div>
    </ScrollComponent>
  );
}

export default Home;
