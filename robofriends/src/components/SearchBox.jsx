import React from 'react';


const SearchBox = ({searchField, searchChange}) =>{
    return (
        <div className='pd2'>
            <input
                className='pa2 ba b--green bg-lightest-blue' 
                tyoe='search' 
                placeholder='Search Robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;