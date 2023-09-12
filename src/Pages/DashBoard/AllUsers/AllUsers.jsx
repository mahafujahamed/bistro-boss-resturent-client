import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleMakeAdmin = user => {
        fetch(`https://bistro-boss-resturent-server-lag310oe7-duplicate-yours.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH',

        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is now an admin`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }


    const handleDelete = user => {

    }
    return (
        <div className="w-full px-10">
            <Helmet>
                <title>Bistro | All Users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4">Total users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{ user.role === 'admin' ? 'admin' :
                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-red-300 text-white"><FaUserShield></FaUserShield></button>
                                
                                }</td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-500 text-white"><FaTrashAlt></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;