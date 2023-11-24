import { Input } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import { LuSearch } from 'react-icons/lu'
import { useDispatch } from 'react-redux'
import { searchDocumentsBySynonyms } from '../slices/documentSlice'

function SearchNav({ searchInput, setSearchInput }) {
    //function para pegar o value do input e enviar para api
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(searchDocumentsBySynonyms(searchInput))
    }, [searchInput])

    return (
        <div className='w-96'>
            <Input
                onChange={e => {
                    setSearchInput(e.target.value)
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
