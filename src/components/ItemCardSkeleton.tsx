import { Skeleton } from "@nextui-org/react";

const ItemCardSkeleton = () => {
  return (
    <div className={`card-container group`}>
      {/* image  */}
      <Skeleton className="rounded-md  bg-gray">
        <div className=" w-full aspect-square select-none"></div>
      </Skeleton>

      <Skeleton className="w-[60%] rounded mx-auto h-6 my-2 bg-gray" />

      <div className=" mt-auto">
        <Skeleton className=" w-full rounded h-2 bg-gray" />
        <div className="flex justify-between items-center mt-8">
          <Skeleton className=" rounded w-8 h-5 bg-gray" />
          <Skeleton className=" rounded-full w-9 h-9 bg-gray" />
          <Skeleton className=" rounded w-8 h-5 bg-gray" />
        </div>
      </div>
    </div>
  );
};

export default ItemCardSkeleton;
