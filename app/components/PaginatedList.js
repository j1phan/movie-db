import Movie from "./Movie"

const PaginatedList = ({ results }) => {
    return (
        <div>
            <ul className="flex flex-col gap-6">
                {results.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </ul>
        </div>
    )
}

export default PaginatedList
