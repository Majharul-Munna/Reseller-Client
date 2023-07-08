import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider.js';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    
    const { user } = useContext(AuthContext);

    const url = `https://re-seller-server.vercel.app/booking?email=${user?.email}`;

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                   authorization: `bearer ${localStorage.getItem('accessToken')}` 
                }
            });
            const data = await res.json();
            return data;
        }
    });
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className="text-3xl mb-5">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>PAYMENT</th>
                            


                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td>
                                    <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src={booking.img} alt='prouct img'/>
                                    </div>
                                    </div>
                                </td>
                                <td>{booking.tvModel}</td>
                                <td>{booking.resalePrice}</td>
                                <td>
                                {
                                        booking.resalePrice && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.resalePrice && booking.paid && <span className='text-green-500'>Paid</span>
                                    }
                                </td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;