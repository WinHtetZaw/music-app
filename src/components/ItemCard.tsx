// share
import { Item } from "../shared/type";

// icons
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";

// react audio library
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

// react redux
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  addCurrentPlayingIndex,
  reduceCurrentPlayingIndex,
  setCurrentPlayingIndex,
} from "../redux/features/musicSlice";

type Props = { track?: Item; isLoading: boolean; max: number };

const ItemCard = (props: Props) => {
  const { currentPlayingIndex } = useAppSelector((state) => state.musicSlice);
  const dispatch = useAppDispatch();
  // console.log(currentPlayingIndex);

  const handleNext = (): void => {
    if (currentPlayingIndex > props.max) {
      dispatch(setCurrentPlayingIndex({ num: 0, max: props.max }));
    } else {
      dispatch(addCurrentPlayingIndex());
    }
  };

  const handlePrevious = (): void => {
    if (currentPlayingIndex < 0) {
      dispatch(setCurrentPlayingIndex({ num: props.max, max: props.max }));
    } else {
      dispatch(reduceCurrentPlayingIndex());
    }
  };

  return (
    <div key={currentPlayingIndex} className={`card-container group`}>
      {/* image  */}
      <div className=" overflow-hidden rounded-md select-none">
        <img src={props.track?.album.cover_big} />
      </div>

      <div className=" text-center w-full truncate my-2">
        <h3 className="font-1">{props?.track?.title_short}</h3>
      </div>

      <div className="relative mt-auto">
        <AudioPlayer
          autoPlayAfterSrcChange={false}
          src={props?.track?.preview}
        />
        <button onClick={handleNext} className="absolute right-0 bottom-[-3px]">
          <BiSkipNext className=" text-gray text-[45px]" />
        </button>
        <button
          onClick={handlePrevious}
          className="absolute left-0 bottom-[-3px]"
        >
          <BiSkipPrevious className=" text-gray text-[45px]" />
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
