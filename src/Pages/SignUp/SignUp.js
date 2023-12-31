import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider.js';

const SignUp = () => {
   
    const { register, handleSubmit, formState: { errors } } = useForm(); // ract hook from 
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    
    const from = location.state?.from?.pathname || '/';

    const handleSignUp = (data) => {
        console.log(data);
        setSignUPError('');

    createUser(data.email, data.password, data.role)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { 
                        saveUser(data.name, data.email, data.role);
                        navigate('/');
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

     // google sign in handle 
     const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            saveUser(user.displayName, user.email, "buyers");
            toast.success('Successfully logged in');
            navigate(from, { replace: true });
        })
        .catch(error => console.error(error));
    }

    const saveUser = (name, email, role) =>{
        const user ={name, email, role};
        fetch('https://re-seller-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            //console.log("save user", data);
            navigate('/');
        })
    }
   
    return (
        <div className='h-[800px] flex justify-center items-center bg-base-300'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Please select your Role</span></label>
                        <select {...register("role")} className="input input-bordered w-full max-w-xs">
                            <option value="buyers">Buyers</option>
                            <option value="sellers">Sellers</option>
                            
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: "Email is required",
                            // pattern: { value: /(?=.*[@])(?=.*[d])(?=.*[i])(?=.*[u])(?=.*[.])(?=.*[e])(?=.*[d])(?=.*[u])(?=.*[.])(?=.*[b])(?=.*[d])/, message: 'DIU e-mail required' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default SignUp;