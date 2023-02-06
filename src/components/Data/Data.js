import React, { useEffect, useState } from 'react';

const Data = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('dataStore.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <h1 className='text-violet-600 font-bold text-2xl p-5 '>Users Data</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th className='text-xl text-violet-600'>No.</th>
                            <th className='text-xl text-violet-600'>Name</th>
                            <th className='text-xl text-violet-600'>Sold At</th>
                            <th className='text-xl text-violet-600'>Club</th>
                            <th className='text-xl text-violet-600'>ETH</th>
                            <th className='text-xl text-violet-600'>Payment Token</th>
                            <th className='text-xl text-violet-600'>Quantity</th>
                            <th className='text-xl text-violet-600'>Symbol</th>
                            <th className='text-xl text-violet-600'>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user, i) =>
                                <tr key={user.id}>
                                    <th className='font-bold'>{i + 1}</th>
                                    <td className='font-bold'>{user.asset_name}</td>
                                    <td className='font-bold'>{user.created_date}</td>
                                    <td className='font-bold'>{user.category}</td>
                                    <td className='font-bold'>{user.eth_price}</td>
                                    <td className='font-bold'>{user.payment_token}</td>
                                    <td className='font-bold'>{user.quantity}</td>
                                    <td className='font-bold'>{user.symbol}</td>
                                    <td className='font-bold'>{user.type}</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Data;