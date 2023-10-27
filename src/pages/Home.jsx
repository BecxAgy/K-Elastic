import React from 'react'
import SearchNav from '../components/SearchNav'
import SimpleCardDocument from '../components/SimpleCardDocument'
import { CardDocumentWithImage } from '../components/CardDocumentWithImage'
import { BackgroundCard } from '../components/BackgroundCard'

function Home() {
    return (
        <div className='grid grid-flow-row gap-8'>
            <SearchNav />
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:grid-cols-4 gap-4 lg:gap-8'>
                <SimpleCardDocument colspan={2} />
                <BackgroundCard />
                <SimpleCardDocument colspan={1} />
                <CardDocumentWithImage />
                <SimpleCardDocument />
                <CardDocumentWithImage />
                <SimpleCardDocument />
                <SimpleCardDocument />
                <SimpleCardDocument />
                <SimpleCardDocument />
                <SimpleCardDocument />
                <SimpleCardDocument />
                <SimpleCardDocument />
                <SimpleCardDocument />
                <SimpleCardDocument />
                <SimpleCardDocument />
                <SimpleCardDocument />
            </div>
        </div>
    )
}

export default Home
