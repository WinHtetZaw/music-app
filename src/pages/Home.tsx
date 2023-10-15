// react
import { useEffect, useState } from "react";

// components
import ItemCard from "../components/ItemCard";
import ItemList from "../components/ItemList";
import SearchInput from "../components/SearchInput";
import ItemCardSkeleton from "../components/ItemCardSkeleton";
import ItemListSkeleton from "../components/ItemListSkeleton";
import LeftSide from "../components/LeftSide";
import MenuModal from "../components/MenuModal";

// react redux
import { useAppSelector } from "../redux/hooks";
import { useGetSearchListsQuery } from "../redux/services/musicApi";

// share
import { Item } from "../shared/type";

// icons
import { RiMenu4Line } from "react-icons/ri";

// ui library
import { useDisclosure } from "@nextui-org/react";
import Foot from "../components/Foot";

const Home = () => {
  const { currentPlayingIndex } = useAppSelector((state) => state.musicSlice);
  const { searchName } = useAppSelector((state) => state.musicSlice);
  const { data, isLoading, isSuccess, status } =
    useGetSearchListsQuery(searchName);

  // ? array for storing fetching data
  const [items, setItems] = useState<Item[]>([]);

  // ? active music object
  const { activeMusic } = useAppSelector((state) => state.musicSlice);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // data && console.dir(data.data);

  // ? set fetching data to items array when mounted
  useEffect(() => {
    if (isSuccess) {
      setItems(data?.data);
    }
  }, [isSuccess, data]);

  const listLooping = items?.map((el: Item, index: number) => {
    return (
      <div className="" key={index}>
        <ItemList track={el} indexNum={index} max={items.length} />
      </div>
    );
  });

  return (
    <div
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/1436141/pexels-photo-1436141.jpeg?auto=compress&cs=tinysrgb&w=600)`,
      }}
      className=" bg-fixed bg-center bg-cover bg-no-repeat min-h-screen"
    >
      <div className="flex min-h-screen bg-black bg-opacity-40 backdrop-blur-sm">
        <LeftSide />

        <main className="flex w-full h-fit min-h-screen flex-col gap-5 sm:gap-10 p-5 sm:p-10 ">
          <div className="flex gap-3 items-center">
            {/* menu btn and menu modal  */}
            <span
              onClick={onOpen}
              className="sm:hidden bg-white h-[40px] rounded-md aspect-square flex items-center justify-center"
            >
              <RiMenu4Line className="text-2xl text-black" />
            </span>
            <MenuModal isOpen={isOpen} onOpenChange={onOpenChange} />

            <SearchInput />
          </div>

          <article className="flex xl:article-h gap-10 flex-col xl:flex-row">
            {isLoading || status === "pending" || !isSuccess ? (
              <>
                <div className=" w-fit max-xl:mx-auto xl:w-1/3 h-full">
                  <ItemCardSkeleton />
                </div>
                <div className=" w-full h-full p-3 glass-1">
                  <div className="list-container custom-scrollbar">
                    <ItemListSkeleton />
                    <ItemListSkeleton />
                    <ItemListSkeleton />
                    <ItemListSkeleton />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* card  */}
                <div className=" w-fit max-xl:mx-auto xl:w-1/3 h-full">
                  {activeMusic &&
                  items.length > 0 &&
                  currentPlayingIndex < 0 ? (
                    <ItemCard
                      track={activeMusic}
                      isLoading={isLoading}
                      max={items.length}
                    />
                  ) : (
                    <ItemCard
                      track={items[currentPlayingIndex]}
                      isLoading={isLoading}
                      max={items.length}
                    />
                  )}
                </div>
                {/* lists  */}
                <div className=" w-full h-full p-3 glass-1">
                  <div className="list-container custom-scrollbar">
                    {listLooping}
                  </div>
                </div>
              </>
            )}
          </article>
        </main>
      </div>

      <Foot/>
    </div>
  );
};

export default Home;
