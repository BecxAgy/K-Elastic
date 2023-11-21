import { Input } from '@material-tailwind/react'
import React from 'react'
import { LuSearch } from 'react-icons/lu'

function SearchNav({searchInput, setSearchInput}) {
     //function para pegar o value do input e enviar para api

     const searchFunction = async(value)=>
     {
        debugger;
            const response = await fetch(`http://localhost:8000/elastic/searchsynonyms?index=kempetro&body=${value}`)
            .then((response) => response.json())
            .catch((error) => console.log(error))

            const data =  response
            console.log(data)
     }
    return (
        <div className='w-96'>
            <Input          
                onChange={(e) => {
                    setSearchInput(e.target.value )
                    searchFunction(searchInput)
                }}
                color='cyan'
                className='border-none bg-blue-gray-200/10 rounded-xl  '
                label='Faça sua pesquisa!'
                icon={<LuSearch />}
            />
        </div>
    )
}

export default SearchNav
