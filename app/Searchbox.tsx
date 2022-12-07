"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Searchbox = () => {
  const router = useRouter();

  const [input, setInput] = useState("");


  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!input) return;
    
    router.push(`/search?term=${input}`);
  };

  return (
    <form 
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-300 text-gray-500 outline-none flex-1 bg-transparent dark:text-cyan-400"
      />
      <button
        type="submit"
        disabled={!input}
        className="bg-cyan-400 disabled:bg-gray-200 text-slate-900 disabled:text-gray-300 py-2 px-5 border-none rounded-md"
      >
        Search
      </button>
    </form>
  );
};

export default Searchbox;
