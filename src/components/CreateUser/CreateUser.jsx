import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateUser = () => {


    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.fullName.value;
        const phone = form.phone.value;
        const photoUrl = form.photoURL.value;
        const email = form.email.value;

        const user = { name, phone, photoUrl, email }

        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('User create successfully');
                    form.reset();
                }
            })

    }

    return (
        <div className="w-full h-screen overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >

            <div className="bg-white py-6 px-10 sm:max-w-md w-full ">
                <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
                    Add User Info
                </div>
                <div className="back_to_user_btn_area text-right">
                    <Link to="/users">
                        <button type="button" className="py-2 px-4 my-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Show User Data
                        </button>
                    </Link>
                </div>
                <form onSubmit={handleCreateUser}>
                    <div className="">
                        <input type="text" name='fullName' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder="Full Name " />
                    </div>
                    <div className="">
                        <input type="text" name="phone" className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder=" Phone Number " />
                    </div>
                    <div className="">
                        <input type="text" name="photoURL" className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder="Photo URL " />
                    </div>
                    <div>
                        <input type="email" name="email" className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8" placeholder="Your Email" />
                    </div>

                    <div className="flex justify-center my-6">
                        <button type="submit" className="py-2 px-4 my-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Add User Info
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default CreateUser;