import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AllSelers = () => {
    const [deleting, setDeleting] = useState(null);
    const closeModal = () => {
        setDeleting(null);
    }
    const {data: users = [], isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/allselers');
            const data = await res.json();
            return data;
        }
    });
    // for delete
    const handleDelete = user => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE', 
            headers: {
                //authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`${user.name} deleted successfully`)
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl">All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =><tr key={user._id}>
                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><label onClick={() => setDeleting(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
                            </tr>)
                        }
                    
                        </tbody>
                    </table>
                </div>
                {
                    deleting && <ConfirmationModal
                        title={` Are you sure you want to delete?`}
                        message={`If you delete ${deleting.name}. It cannot be undone.`}
                        successAction = {handleDelete}
                        successButtonName="Delete"
                        modalData = {deleting}
                        closeModal = {closeModal}
                    >
                    </ConfirmationModal>
                }
        </div>
    );
};

export default AllSelers;