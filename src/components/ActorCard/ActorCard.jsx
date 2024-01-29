import { Link } from "react-router-dom"

export default function ActorCard({ actor, imageUrl }) {
    const cardStyle = {
        backgroundImage: `url(${ imageUrl })`
    }

    return (
        <Link to={`/actors/${ actor }`}>
            <div className="actorCard" 
            style={ cardStyle }>
                <p>{ actor }</p>
            </div>
        </Link>
    )
}