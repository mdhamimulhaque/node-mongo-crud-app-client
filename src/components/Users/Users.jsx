import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UsersTd from './UsersTd';

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsers(data)
            })
    }, [])
    return (

        <div className="container mx-auto px-4 sm:px-8 max-w-3xl h-screen">
            <div className="btn_area mt-4 flex gap-4">

                <Link to="/create-user">
                    <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Add User
                    </button>
                </Link>

                <button type="button" className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Logout
                </button>

            </div>
            <div className="py-8">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        User
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Name
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Email
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Phone
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Update/Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user => <UsersTd key={user._id} user={user} />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Users;