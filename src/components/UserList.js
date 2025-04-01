
const users =[
    {id:1,name:"john",role:"User"},
    {id:2,name:"emma",role:"Admin"},
    {id:3,name:"Alex",role:"User"}
];

function UserList(){
return (
    <div>
        <h2>Users</h2>
        <ul>
            {users.map((user)=>(
                <li
                    key={user.id}
                    style={{color: user.role==="Admin" ? "red" : "black"}}
                    >
                        {user.name}-{user.role}
                </li>
           ) )}
        </ul>
    </div>
)
}
export default UserList();