import { useParams } from 'react-router-dom'

const Users = () => {
    let { username } = useParams();
    return (
        <div>
            <h1>Username: {username}</h1>
        </div>
    )
}

export default Users
