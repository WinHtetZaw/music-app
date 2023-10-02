import React from "react";
import { setActiveMusic } from "../redux/features/musicSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Item } from "../shared/type";
import { BsHeart } from "react-icons/bs";

type Props = Item;

const ItemList = (props: Props) => {
  const { id, title, title_short, artist, album } = props;
  const dispatch = useAppDispatch();
  const { activeMusic } = useAppSelector((state) => state.musicSlice);

  const handleClick = (e: React.MouseEvent<HTMLElement>, el: Item) => {
    e.stopPropagation();
    dispatch(setActiveMusic(el));
  };

  // activeMusic && console.log(activeMusic);

  return (
    <>
      <div
        onClick={(e) => handleClick(e, props)}
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
          <h2>{title_short}</h2>
          <h2>{artist.name}</h2>
        </div>
        <div className="ml-auto">
          <BsHeart />
        </div>
      </div>
    </>
  );
};

export default ItemList;
