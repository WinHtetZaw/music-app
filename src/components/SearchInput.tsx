import { useRef } from "react";
import { GoSearch } from "react-icons/go";
import { setSearchName } from "../redux/features/musicSlice";
import { useAppDispatch } from "../redux/hooks";
import { HiXMark } from "react-icons/hi2";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const searchRef = useRef<string>("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleInputSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchWords = e.target.value;
    searchRef.current = searchWords;
    // setSearch(searchWords);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchName(searchRef.current));
  };

  const handleClear = (): void => {
    if (formRef.current) {
      formRef.current.reset();
    }
    dispatch(setSearchName(""));
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleFormSubmit}
      className="h-[40px] flex items-center group bg-white text-[#333] rounded-md w-full overflow-hidden"
    >
      <div className=" px-2">
        <GoSearch className="text-lg opacity-70" />
      </div>
      <input
        onChange={handleInputSearchChange}
        type="text"
        placeholder="Search . . . "
        className=" bg-transparent h-full outline-none w-full placeholder:select-none"
      />
      <button type="button" onClick={handleClear} className="px-2 ml-auto">
        <HiXMark />
      </button>
    </form>
  );
};

export default SearchInput;
