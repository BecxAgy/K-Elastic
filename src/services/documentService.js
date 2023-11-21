import { api, requestConfig } from '../configs/config'

const searchSynonyms = async valueInput => {
    const config = requestConfig('GET', null)

    try {
        const response = await fetch(
            api + `searchsynonyms?index=kempetro&body=${valueInput}`,
            config,
        )
            .then(response => response.json())
            .catch(error => console.log(error))

        return response
    } catch (error) {
        console.log(error)
    }
}

const documentService = {
    searchSynonyms,
}

export default documentService
