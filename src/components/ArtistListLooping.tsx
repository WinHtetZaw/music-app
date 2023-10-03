import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setSearchName } from "../redux/features/musicSlice";
import { artists } from "../shared/data";

const ArtistListLooping = () => {
  const { searchName } = useAppSelector((state) => state.musicSlice);

  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLLIElement>): void => {
    if (e.target instanceof HTMLElement) {
      const name = e.target.innerText;
      dispatch(setSearchName(name));
    }
  };
  return (
    <ul className="flex flex-col p-5 gap-2">
      {artists?.map((artist, index) => {
        const isActive = artist.name.toLowerCase() === searchName.toLowerCase();
        return (
          <li
            onClick={handleClick}
            className={`${
              isActive &&
              " scale-x-[1.1] scale-y-[1.3] my-3 bg-opacity-90 activeArtist"
            } px-3 py-1 [&:not(.activeArtist)]:hover:bg-slate-600 bg-black bg-opacity-30 select-none cursor-pointer rounded-md transition-all duration-150`}
            key={index}
          >
            {artist.name}
          </li>
        );
      })}
    </ul>
  );
};

export default ArtistListLooping;
