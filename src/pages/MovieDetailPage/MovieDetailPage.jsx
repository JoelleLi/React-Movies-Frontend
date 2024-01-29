import { useParams } from 'react-router-dom'

export default function MovieDetailPage ({ movies }) {
    const { movieName } = useParams()
    const movie = movies.find((movie) => movie.title === movieName)
    const { title, releaseDate, posterPath, cast } = movie

    return (
        <>
        <h2>{title}</h2>
        <p>Release Date: {releaseDate}</p>
        <img src={posterPath} alt={`${title} Poster`}/>
        <p>Cast: {cast.join(', ')}</p>
        </>
    )
}