import { Character, CharacterResults } from '~/types'

const API_URL = String(import.meta.env.VITE_API_URL)
export const getCharacters = async () => {
	const res = await fetch(`${API_URL}/search/a`)
	const response: CharacterResults = await res.json()
	return response.results
}

export const getCharacterByName = async (name: string) => {
	const res = await fetch(`${API_URL}/search/${name}`)
	const response: CharacterResults = await res.json()
	return response
}

export const getCharacterById = async (id: string) => {
	const res = await fetch(`${API_URL}/${id}`)
	const fetchedData: Character = await res.json()
	return fetchedData
}
