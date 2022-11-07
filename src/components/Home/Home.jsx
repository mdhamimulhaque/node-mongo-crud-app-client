import React from 'react';
import img1 from "../../img/crud-gif/create.gif";
import img2 from "../../img/crud-gif/read.gif";
import img3 from "../../img/crud-gif/update.gif";
import img4 from "../../img/crud-gif/delete.gif";
import { Link } from 'react-router-dom';

const homePageData = [
    {
        id: 1,
        img: img1,
        name: "create"
    },
    {
        id: 2,
        img: img2,
        name: "read"
    },
    {
        id: 3,
        img: img3,
        name: "update"
    },
    {
        id: 4,
        img: img4,
        name: "delete"
    }
]

const Home = () => {
    return (
        <section className="bg-white dark:bg-gray-900 h-screen w-full flex justify-center items-center">

            <div className="container px-6 mx-auto">
                <h2 className="text-5xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Node Mongo CRUD App</h2>

                <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        homePageData.map(data =>
                            <div className="w-full max-w-xs text-center">
                                <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={data.img} alt="avatar" />

                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">{data.name}</h3>
                                </div>
                            </div>
                        )
                    }

                </div>
                <div className="btn_area text-center">
                    <Link to='/users'>
                        <button class="px-6  py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            get started
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Home;