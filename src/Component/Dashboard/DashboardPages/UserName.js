
import {useQuery} from 'react-query'
import Loading from '../../Loading/Loading'
import UserRow from './UserRow';

const UserName = () => {
   
    const{data,isLoading,refetch}= useQuery('users',()=>fetch('http://localhost:5000/user').then(res=>res.json()))

    if(isLoading){
        return <Loading></Loading>
        
    }
        return (
        <div>
            <h2>all user:{data.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-50 mx-auto">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Admin</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
    {
        data.map(user=><UserRow key={user._id} user={user} refetch={refetch}></UserRow>)
    }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default UserName;



