import { useParams } from "react-router-dom"

export default function ActorDetailPage ({ movies }) {
    const { actorName } = useParams()

    const actorMovies = movies.filter((movie) => movie.cast.includes(actorName))

    return (
        <div>
            <h2>{ actorName }'s Filmography</h2>
            <div>
                {actorMovies.map((movie, index) => (
                    <p key={ index }>{ movie.title }</p>
                ))}
            </div>
        </div>

    )
}