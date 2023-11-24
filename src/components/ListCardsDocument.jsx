import React from 'react'
import { useSelector } from 'react-redux'
import SimpleCardDocument from './SimpleCardDocument'

function ListCardsDocument() {
    const { documents } = useSelector(state => state.document)
    return (
        <div>
            {documents && documents.map((doc, i) => <SimpleCardDocument doc />)}
        </div>
    )
}

export default ListCardsDocument
