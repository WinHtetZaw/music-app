import { useGetArtistsQuery } from "../redux/services/billboardApi";
import { useState, useEffect } from "react";

type Props = {};

const LeftSide = (props: Props) => {
  //   const { data } = useGetArtistsQuery({ from: 1, to: 20 });
  const [artists, setArtists] = useState<string[]>([]);
  //   data && console.log(data);

  useEffect(() => {
    if (artists && artists.length <= 20) {
    //   setArtists([...artists, "artists name"]);
      for (let i = 0; i < 20; i++) {
        // const element = array[index];
        setArtists([...artists, "artists name"]);
      }
    }

  }, []);

  artists && console.log(artists);
  return (
    <>
      <section className="hidden sm:block bg-gradient-to-bl from-sky-950 to-black min-w-[300px]">
        <ul>
          <li>artist name</li>
        </ul>
      </section>
    </>
  );
};

export default LeftSide;
