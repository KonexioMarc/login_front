import { useState, useEffect } from 'react'

export default function Admin() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3002/users', {
            method: 'GET',
            credentials: "include" // Bien ajouter cette ligne pour que le cookie soit envoyé dans la requete
        })
            .then(res => res.json())
            .then(users => setUsers(users))
    }, [])
    return (
        <div>
            {users.map(user => (
                <div>
                    <p>{user.username}</p>
                    <p>{user.dateOfBirth}</p>
                </div>
            ))}
        </div>
    )
}