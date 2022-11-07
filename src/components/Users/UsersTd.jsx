import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";

const UsersTd = ({ user }) => {
    const { name, phone, photoUrl, email } = user;
    return (
        <>
            <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link to="#" className="block relative">
                                <img alt="portfolio" src={photoUrl} className="mx-auto object-cover rounded-full h-10 w-10 " />
                            </Link>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {name}
                    </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {email}
                    </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {phone}
                    </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex gap-4 font-semibold text-2xl cursor-pointer">
                        <span className='text-indigo-600 hover:text-indigo-700'><HiOutlinePencilAlt /></span>
                        <span className='text-red-600 hover:text-red-700'><HiOutlineTrash /></span>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default UsersTd;