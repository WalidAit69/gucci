import React from 'react'

function SearchBar() {
  return (
    <div className='absolute right-0 bottom-0 bg-slate-500 w-fit'>
        <div className='bg-red-300 relative'>
            <h1>Search</h1>
            <input type="text" />
        </div>
    </div>
  )
}

export default SearchBar