import { Component } from 'solid-js'
import { Outlet } from '@solidjs/router'
import { CharactersLayout } from '~/App'
import { Toaster } from 'solid-toast'
const CharacterNestedRoute: Component = () => {
	return (
		<>
			<CharactersLayout>
				<Outlet />
			</CharactersLayout>
			<Toaster position="top-right" />
		</>
	)
}

export default CharacterNestedRoute
