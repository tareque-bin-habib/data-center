import React from 'react';
import Data from '../Data/Data';
import Filter from '../Filter/Filter';
import './AllData.css'

const AllData = () => {
    return (
        <div className='divide'>
            <Data></Data>
            <Filter></Filter>
        </div>
    );
};

export default AllData;