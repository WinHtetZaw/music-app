import ArtistListLooping from "./ArtistListLooping";

const LeftSide = () => {
  return (
    <>
      <section
        className={`hidden sm:block h-full sm:h-screen  bg-[#1a2238] min-w-[250px] md:min-w-[300px] pr-2 py-2`}
      >
        <div className="pt-5 h-full sm:leftSide-h overflow-y-auto custom-scrollbar">
          <h2 className=" w-full text-center capitalize text-lg tracking-wider">
            top artists of 2023
          </h2>
          <ArtistListLooping />
        </div>
      </section>
    </>
  );
};

export default LeftSide;
