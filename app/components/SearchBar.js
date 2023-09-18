"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();
    const onSearch = (event) => {
        event.preventDefault();
        router.push(`/search?q=${searchQuery}`);
    }

    return (
        <div className="w-2/3">
            <form className="flex flex-grow">
                <input
                    className={`px-5 py-1 w-2/3 sm:px-5 sm:py-3 text-zinc-200 
                               bg-zinc-800 rounded-l-full flex-1 
                               focus:outline-none focus:ring-2 
                               focus:ring-blue-600 focus:border-transparent`}
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Whatcha looking for?"
                />
                <button
                    className={`text-white bg-blue-700 hover:bg-blue-800 
                               rounded-r-md px-2 py-1 gap:5`}
                    onClick={onSearch}>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;

