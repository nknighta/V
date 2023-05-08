
import React,{useState,useEffect} from 'react'

export default class Home extends React.Component<any, any> {

    componentDidMount() {
        fetch('http://localhost:4100/api/t3')
            .then(res => res.json())
            .then((data) => {
                this.setState({users: data})
            })
            .catch(console.log)
    }

    render() {
        const users:any = ""
        return (
            <div>
                <ul>
                    {Object.values(users).map((user) => (
                        <li key={user.id} className={"bg-white text-black m-3 w-1/2 h-10 rounded-lg"}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

/*export default function Home({data}) {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/')
            const data = await response.json()
            setUsers(data.users)
        }
        fetchUsers()
    },[])
    console.log(typeof (data))
    return (
        <div>
            <ul>
                {data.map((user) => (
                    <li key={user.id}></li>
                ))}
            </ul>
        </div>
    )
}*/