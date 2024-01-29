import { Link } from "react-router-dom"

export default function MovieCard ({ movie }) {
    const cardStyle = {
        backgroundImage: `url(${ movie.posterPath })`
    }

    return (
        <Link to={`/movies/${movie.title}`}>
            <div className="movieCard" style={ cardStyle }
            >
                <h1>{ movie.title }</h1>
                <h3>{ movie.releaseDate }</h3>
            </div>
        </Link>
    )
}