import { Component } from 'solid-js'
import { Outlet } from '@solidjs/router'
import { CharactersLayout } from '~/App'
const CharacterNestedRoute: Component = () => {
	return (
		<CharactersLayout>
			<Outlet />
		</CharactersLayout>
	)
}

export default CharacterNestedRoute
