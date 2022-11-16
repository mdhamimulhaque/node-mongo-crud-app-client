import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';


const UpdateUser = () => {
    const userInfo = useLoaderData();
    const [updateUserInfo, setUpdateUserInfo] = useState(userInfo);
    const { _id, name, phone, photoUrl, email } = updateUserInfo;


    // ---> handle field changed
    const handleFieldChanged = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const updateInfo = { ...updateUserInfo }
        updateInfo[field] = value;
        setUpdateUserInfo(updateInfo)
    }

    // ---> handle update user
    const handleUpdateUser = (e) => {
        e.preventDefault();
        const updateDoc = updateUserInfo;

        fetch(`http://localhost:5000/update-user/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updateDoc),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('user information updated successfully')
                }
            })



    }
    return (
        <div className="w-full h-screen overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >

            <div className="bg-white py-6 px-10 sm:max-w-md w-full ">
                <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
                    Update User Info
                </div>
                <div className="back_to_user_btn_area text-right">
                    <Link to="/users">
                        <button type="button" className="py-2 px-4 my-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Show User Data
                        </button>
                    </Link>
                </div>
                <form onSubmit={handleUpdateUser}>
                    <div className="">
                        <input type="text"
                            name='name'
                            defaultValue={name}
                            onChange={handleFieldChanged}
                            className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder="Full Name " />
                    </div>
                    <div className="">
                        <input type="text"
                            name="phone"
                            defaultValue={phone}
                            onChange={handleFieldChanged}
                            className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder=" Phone Number " />
                    </div>
                    <div className="">
                        <input type="text"
                            name="photoUrl"
                            defaultValue={photoUrl}
                            onChange={handleFieldChanged}
                            className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder="Photo URL " />
                    </div>
                    <div>
                        <input type="email"
                            name="email"
                            defaultValue={email}
                            onChange={handleFieldChanged}
                            className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8" placeholder="Your Email" />
                    </div>

                    <div className="flex justify-center my-6">
                        <button type="submit" className="py-2 px-4 my-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Update
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdateUser;