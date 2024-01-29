import MovieCard from "../../components/MovieCard/MovieCard"

export default function MoviesListPage ({ movies }) {
    return (
        <>
            <h1>MoviesListPage</h1>
            <div className="moviesListWrapper">
                { movies.map((movie) => (
                    <MovieCard movie={ movie }/>
                ))}
            </div>
        </>
    )
}