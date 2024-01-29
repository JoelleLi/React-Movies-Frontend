import { Link } from "react-router-dom"

export default function NavBar ({ user }) {

    return (
        <div>
            <h1>NavBar</h1>
            <h5>Hello, { user }</h5>
            <Link to="/">MoviesListPage</Link>
            &nbsp; | &nbsp;
            <Link to="/actors">ActorsListPage</Link>
        </div>

    )
}