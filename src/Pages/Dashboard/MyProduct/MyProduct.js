import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
    const [deleting, setDeleting] = useState(null);
    const closeModal = () => {
        setDeleting(null);
    }

    const navigate = useNavigate();
    const { data: addedProducts, isLoading, refetch } = useQuery({
        queryKey: ['addedProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/addedProducts')
            const data = await res.json();
            return data;
        }
    })

    // for delete
    const handleDelete = addedProduct => {
        fetch(`http://localhost:5000/addedProducts/${addedProduct._id}`, {
            method: 'DELETE', 
            headers: {
                //authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`${addedProduct.title} deleted successfully`)
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    
    // for product advertisement
    const forAdvertise = productForAdvertise =>{
        fetch('http://localhost:5000/advertisement', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json',
                },
                body: JSON.stringify(productForAdvertise)
            })
            .then(res => res.json())
            .then(result =>{
                console.log(result)
                toast.success(`product added successfully for advertisement`)
                navigate('/')
            })
    }
    
    return (
        <div>
            
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Model Name</th>
                                <th>Resale Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {addedProducts && addedProducts?.map((addedProduct, i) => <tr
                                key={addedProduct._id}
                                >
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={addedProduct.img} alt='seller' />
                                        </div>
                                    </div>
                                </td>
                                <td>{addedProduct.title}</td>
                                <td>$ {addedProduct.resale_price}</td>
                                <td>
                                {
                                       addedProduct.resale_price && !addedProduct.paid && <span
                                            className='text-info'
                                        >Unsold</span>
                                    }
                                     {
                                        addedProduct.resale_price && addedProduct.paid && <span
                                            className='text-primary'
                                        >Sold</span>
                                    }
                                </td>
                                <td>
                                    <button onClick={()=>forAdvertise(addedProduct)} className='btn btn-sm btn-info mr-3'>Click for Ad</button>
                                    <label onClick={() => setDeleting(addedProduct)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>
                            )}



                        </tbody>
                    </table>
                </div>
                {
                    deleting && <ConfirmationModal
                        title={` Are you sure you want to delete?`}
                        message={`If you delete ${deleting.title}. It cannot be undone.`}
                        successAction = {handleDelete}
                        successButtonName="Delete"
                        modalData = {deleting}
                        closeModal = {closeModal}
                    >
                    </ConfirmationModal>
                }
            </div>
        </div>
    );
};

export default MyProducts;