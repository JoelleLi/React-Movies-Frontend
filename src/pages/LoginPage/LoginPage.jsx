import { useState } from "react"

export default function LoginPage ({ setUser }) {
    const [username, setUsername] = useState("")

    function handleSubmit (event) {
        event.preventDefault()
        setUser(username)
        setUsername("")
    }

    return (
        <form onSubmit={handleSubmit}
        action="">
            <input 
            value={username} 
            type="text"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)} 
            />
            <button type="submit">Login</button>
        </form>
    )
}