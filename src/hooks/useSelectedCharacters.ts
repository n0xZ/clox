import { createSignal } from 'solid-js'
import toast from 'solid-toast'

import type { Character } from '~/types'

const getSelectedHeroes = () => {
	const selectedHeroes = JSON.parse(
		String(localStorage.getItem('selected-characters'))
	) as Character[]
	return selectedHeroes
}
export const useSelectedCharacters = () => {
	const [myCharacters, setMyCharacters] = createSignal<Character[] | null>(
		getSelectedHeroes()
	)

	const addHeroToLocalStorage = (char: Character) => {
		if (localStorage.getItem('selected-characters') === null) {
			const selectedCharacters = [] as Character[]

			selectedCharacters.push(char)
			localStorage.setItem(
				'selected-characters',
				JSON.stringify(selectedCharacters)
			)
			setMyCharacters(selectedCharacters)
			toast.success('GIF agregado con éxito')
		} else {
			const selectedCharacters = JSON.parse(
				String(localStorage.getItem('selected-characters'))
			) as Character[]

			selectedCharacters.push(char)

			localStorage.setItem(
				'selected-characters',
				JSON.stringify(selectedCharacters)
			)
			setMyCharacters(selectedCharacters)
			toast.success('GIF agregado con éxito')
		}
	}
	const removeHeroFromLocalStorage = (char: Character) => {
		const selectedCharacters = JSON.parse(
			String(localStorage.getItem('selected-characters'))
		) as Character[]
		const filteredCharacters = selectedCharacters.filter(
			(character) => char.id !== character.id
		)
		localStorage.setItem(
			'selected-characters',
			JSON.stringify(filteredCharacters)
		)
		setMyCharacters(filteredCharacters)
	}
	return {
		myCharacters,
		addHeroToLocalStorage,
		removeHeroFromLocalStorage,
	}
}
