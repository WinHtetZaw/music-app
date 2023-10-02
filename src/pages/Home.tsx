import { useEffect, useRef, useState } from "react";
import ItemCard from "../components/ItemCard";
import ItemList from "../components/ItemList";
import SearchInput from "../components/SearchInput";
import { useAppSelector } from "../redux/hooks";
import { useGetSearchListsQuery } from "../redux/services/musicApi";
import { Item } from "../shared/type";
import LeftSide from "../components/LeftSide";
import ItemCardSkeleton from "../components/ItemCardSkeleton";
import ItemListSkeleton from "../components/ItemListSkeleton";

const Home = () => {
  const [items, setItems] = useState<Item[]>([]);
  const { searchName } = useAppSelector((state) => state.musicSlice);
  const { data, isLoading, isSuccess, status } =
    useGetSearchListsQuery(searchName);
  const { activeMusic } = useAppSelector((state) => state.musicSlice);

  // data && console.dir(data.data);

  // const items: Item[] | undefined = data?.data;

  useEffect(() => {
    if (isSuccess) {
      setItems(data?.data);
    }
  }, [isSuccess, data]);

  // const cardLooping = items?.map((el: Item, index: number) => {
  //   return (
  //     <div className="" key={index}>
  //       <ItemCard {...el} />
  //     </div>
  //   );
  // });

  const listLooping = items?.map((el: Item, index: number) => {
    return (
      <div className="" key={index}>
        <ItemList {...el} />
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
        {/* main content  */}
        <main className="flex w-full h-fit min-h-screen flex-col gap-5 sm:gap-10 p-5 sm:p-10 ">
          <SearchInput />

          <article className="flex md:article-h gap-10 flex-col sm:flex-row">
            {isLoading || status === "pending" ? (
              <>
                <div className=" w-1/3 h-full">
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
                <div className=" w-1/3 h-full">
                  {activeMusic && items.length > 0 ? (
                    <ItemCard track={activeMusic} isLoading={isLoading} />
                  ) : (
                    <ItemCard track={items[0]} isLoading={isLoading} />
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
    </div>
  );
};

export default Home;
