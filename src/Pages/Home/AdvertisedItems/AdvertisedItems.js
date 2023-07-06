import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ItemsCard from './ItemsCard';

const AdvertisedItems = () => {
    const [product, setProduct] = useState(null);

    const { data: addedProducts } = useQuery({
        queryKey: ['addedProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertisement')
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='my-8'>
            { addedProducts?.length > 0 && <>
                <h2 className='text-3xl text-center font-bold text-orange-600'>Product Advertisement</h2>
            </>
            }
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 mx-8'>
                {   addedProducts &&
                    addedProducts.map(pdt => <ItemsCard
                        key={pdt._id}
                        pdt={pdt}
                        setProduct={setProduct}
                    ></ItemsCard>)
                }
            </div>
            
            
        </div>
    );
};

export default AdvertisedItems;