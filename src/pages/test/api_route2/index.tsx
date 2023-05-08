
import React,{useState,useEffect} from 'react'

export default class Home extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(res => res.json())
            .then((data) => {
                this.setState({users: data})
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.users.map((user) => (
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