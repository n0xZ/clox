import { createResource, Resource } from 'solid-js'
import { RouteDataFuncArgs } from '@solidjs/router'
import { getCharacterById, getCharacters } from '~/services/characters'

export const CharacterByIdData = ({ params }: RouteDataFuncArgs) => {
	const [character] = createResource(() => params.id, getCharacterById)

	return character
}

export const ViewCharacters = () => {
	const [characters] = createResource(getCharacters)
	return characters
}
