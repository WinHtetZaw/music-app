import { Item } from "../shared/type";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

//   album: unknown;
//   artist: unknown;
//   duration: number;
//   explicit_content_cover: number;
//   explicit_content_lyrics: number;
//   explicit_lyrics: boolean;
//   id: number;
//   link: string;
//   md5_image: string;
//   preview: string;
//   rank: number;
//   readable: boolean;
//   title: string;
//   title_short: string;
//   title_version: string;
//   type: string;
// };

type Props = { track?: Item; isLoading: boolean };

const ItemCard = (props: Props) => {
  return (
    <div
      // onMouseOver={() => setIsHover(true)}
      // onMouseLeave={() => setIsHover(false)}
      // className={`card-container group  ${
      //   isHover && "animate__animated animate__jello"
      // }`}
      className={`card-container group`}
    >
      {/* image  */}
      <div className=" overflow-hidden rounded-md select-none">
        {/* <img src="https://images.pexels.com/photos/248510/pexels-photo-248510.jpeg?auto=compress&cs=tinysrgb&w=600" /> */}
        <img src={props.track?.album.cover_big} />
      </div>

      <div className=" text-center w-full truncate my-2">
        <h3>{props?.track?.title_short}</h3>
      </div>

      <div className=" mt-auto">
        <AudioPlayer
          // autoPlay
          src={props?.track?.preview}
          onPlay={(e) => console.dir(e.target)}
        />
      </div>
    </div>
  );
};

export default ItemCard;
