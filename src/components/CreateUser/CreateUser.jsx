import React from 'react';
import { Link } from 'react-router-dom';

const CreateUser = () => {
    return (
        <div class="w-full h-screen overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >

            <div class="bg-white py-6 px-10 sm:max-w-md w-full ">
                <div class="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
                    Create User
                </div>
                <div class="">
                    <div class="">
                        <input type="text" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder="Full Name " />
                    </div>
                    <div class="">
                        <input type="text" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder="Profession" />
                    </div>
                    <div class="">
                        <input type="text" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder=" Phone Number " />
                    </div>
                    <div class="">
                        <input type="text" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder="Photo URL " />
                    </div>
                    <div>
                        <input type="email" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8" placeholder="Your Email" />
                    </div>
                    <div class="">
                        <input type="password" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder="Password " />
                    </div>

                    <div class="flex justify-center my-6">
                        <button class=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold " >
                            Create User
                        </button>
                    </div>
                </div>
                <div className="back_to_user_btn_area text-center">
                    <Link to="/users">
                        <button type="button" class="py-2 px-4 my-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Show User Data
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;