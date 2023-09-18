"use client";

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import PaginatedList from "../components/PaginatedList"
const itemsPerPage = 10;

const SearchResults = () => {
    const [searchResults, setSearchResults] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [apiPage, setApiPage] = useState(1)

    const search = useSearchParams()
    const searchQuery = search ? search.get("q") : null

    const getSearchResults = async () => {
        const url = `http://localhost:3000/api/search?q=${searchQuery}&page=${apiPage}`
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                accept: 'application/json',
            }
        })
        const movies = await res.json()
        setSearchResults(movies.results)
        setTotalResults(movies.total_results)
    }

    useEffect(() => {
        if (currentPage % 2 === 1) {
            setApiPage(Math.floor(currentPage / 2) + 1)
        }
    }, [currentPage])

    useEffect(() => {
        getSearchResults()
    }, [apiPage]);

    useEffect(() => {
        setCurrentPage(1)
        setApiPage(1)
        getSearchResults()
    }, [search])

    const totalItems = searchResults.length
    const totalPages = Math.ceil(totalResults / itemsPerPage)
    let startIndex;
    let endIndex;
    if (totalItems > 10) {
        if (currentPage % 2 === 1) {
            startIndex = 0
            endIndex = 10
        } else {
            startIndex = 10
            endIndex = totalItems
        }
    } else {
        startIndex = 0
        endIndex = totalItems
    }

    const currentData = searchResults.slice(startIndex, endIndex)

    return (
        <div className="flex flex-col gap-5">
            <div className="text-4xl">Search Results</div>
            <div className="w-1/3">
                <PaginatedList results={currentData} />
            </div>
            <div className="pagination text-2xl flex gap-4">
                <button
                    className={currentPage === 1 ? `bg-gray` :
                        `text-white bg-blue-700 hover:bg-blue-800 
                        rounded-r-md px-2 py-1 gap:5`}
                    onClick={() => {
                        setCurrentPage(c => c - 1)
                    }}
                    disabled={currentPage === 1}>
                    Previous
                </button>
                <span
                    className="page-info">{`Page ${currentPage} of 
                    ${totalPages}`}
                </span>
                <button
                    className={currentPage === totalPages ? 'bg-gray' :
                        `text-white bg-blue-700 hover:bg-blue-800 
                        rounded-r-md px-2 py-1 gap:5`}
                    onClick={() => {
                        setCurrentPage(c => c + 1)
                    }}
                    disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>

            <div className="text-3xl">Total results: {totalResults}</div>
        </div>
    )
}

export default SearchResults;
