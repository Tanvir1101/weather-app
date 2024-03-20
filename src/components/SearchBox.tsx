import { IoSearch } from "react-icons/io5";
import React, { FormEventHandler } from "react";
import { cn } from "@/utils/cn";

type Props = {
  className?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

const SearchBox = (prop: Props) => {
  return (
    <form
      onSubmit={prop.onSubmit}
      className={cn(
        "flex relative items-center justify-center h-10",
        prop.className
      )}
    >
      <input
        type="text"
        onChange={prop.onChange}
        value={prop.value}
        placeholder="Search Location"
        className="px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 h-full"
      />
      <button className="px-4 py-[9px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600 h-full">
        <IoSearch />
      </button>
    </form>
  );
};

export default SearchBox;
