import React from "react";
import {
  setActiveMusic,
  setCurrentPlayingIndex,
} from "../redux/features/musicSlice";
import { useAppDispatch } from "../redux/hooks";
import { Item } from "../shared/type";
import { BsHeart } from "react-icons/bs";

type Props = {
  track: Item;
  indexNum: number;
  max: number;
};

const ItemList = (props: Props) => {
  const { title_short, artist, album } = props.track;
  // const {currentPlayingIndex} = useAppSelector(state => state.musicSlice)
  const dispatch = useAppDispatch();
  // const { activeMusic } = useAppSelector((state) => state.musicSlice);

  const handleClick = (e: React.MouseEvent<HTMLElement>, el: Item) => {
    e.stopPropagation();
    dispatch(setActiveMusic(el));
    dispatch(setCurrentPlayingIndex({ num: props.indexNum, max: props.max }));
    // console.log(props.indexNum)
  };

  // activeMusic && console.log(activeMusic);

  return (
    <>
      <div
        onClick={(e) => handleClick(e, props.track)}
        className="flex hover:scale-[1.1] transition-all duration-150 gap-5 items-center w-full px-5 py-3 rounded-md bg-black bg-opacity-50 backdrop-blur"
      >
        <div className=" w-[70px] aspect-square rounded-md overflow-hidden">
          <img
            width={70}
            height={70}
            className=" w-full h-full object-center object-cover"
            src={album.cover_small}
            alt=""
          />
        </div>
        <div className="">
          <h2 className="font-1">{title_short}</h2>
          <h2 className="text-sm opacity-70">{artist.name}</h2>
        </div>
        <div className="ml-auto">
          <BsHeart />
        </div>
      </div>
    </>
  );
};

export default ItemList;
