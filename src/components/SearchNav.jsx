import { Input } from '@material-tailwind/react'
import React from 'react'
import { LuSearch } from 'react-icons/lu'

function SearchNav() {
    return (
        <div className='w-96'>
            <Input
                color='cyan'
                className='border-none bg-blue-gray-200/10 rounded-xl  '
                label='Faça sua pesquisa!'
                icon={<LuSearch />}
            />
        </div>
    )
}

export default SearchNav
