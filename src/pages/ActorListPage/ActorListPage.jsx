import ActorCard from "../../components/ActorCard/ActorCard"

export default function ActorListPage ({ movies }) {
    const actorsArray = []


    movies.forEach((movie) => {
        actorsArray.push(...movie.cast)
    })

    const actorsSet = new Set(actorsArray)
    const uniqueActors = Array.from(actorsSet)

    return (
        <>
        <h1>ActorListPage</h1>
            <div className="actorCardsWrapper">
                { uniqueActors.map((actor, index) => (
                    <ActorCard key={ index } actor={ actor } imageUrl={ `https://picsum.photos/200/300?random=${ index + 1 }` } />
                ))}
            </div>
        </>
    )
}