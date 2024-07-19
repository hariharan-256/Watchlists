import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/authActions';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login(email) as any);
        navigate('/');
    };

    return (
        <div className='h-screen w-screen grid place-content-center'>
            <div className="bg-white p-8 rounded shadow-md w-[25rem]">
                <h2 className="text-2xl font-bold mb-6 text-center">Create/Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Email
                        </label>
                        <input required onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Enter your email"
                            value={email} />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-[#28343c] hover:opacity-[.5] ease-out duration-300 text-white font-bold py-2 px-6 rounded-[8px] focus:outline-none focus:shadow-outline mx-auto" type="submit">
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
