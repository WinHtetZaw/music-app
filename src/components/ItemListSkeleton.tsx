import { Skeleton } from "@nextui-org/react";

const ItemListSkeleton = () => {
  return (
    <>
      <div className="flex gap-5 items-center w-full px-5 py-3 rounded-md bg-black bg-opacity-50 backdrop-blur">
        <Skeleton className="bg-gray w-[70px] aspect-square rounded-md" />
        <div className=" space-y-1">
          <Skeleton className=" w-32 h-4 rounded bg-gray" />
          <Skeleton className=" w-20 h-4 rounded bg-gray" />
        </div>
        <Skeleton className="ml-auto w-6 h-6 rounded-full bg-gray" />
      </div>
    </>
  );
};

export default ItemListSkeleton;
