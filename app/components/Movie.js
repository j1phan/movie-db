const Movie = ({ movie }) => {
    return (
        <div className="flex">
            <li>
                <div>
                    <span className="text-2xl font-semibold text-cyan-500 mr-2" >{movie.title}</span>
                    <span>Released on {movie.release_date}</span>
                    <div>
                        <label className="text-xl"> Own this movie? </label>
                        <input type="checkbox" className="ml-2 w-5 h-5" />
                    </div>
                </div>
                <p className="text-xl" >{movie.overview || "No overview available" }</p>
            </li>
        </div>
    );
}

export default Movie
