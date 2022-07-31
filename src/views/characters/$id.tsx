import { Link, useRouteData, useIsRouting } from '@solidjs/router'

import { CharacterByIdData } from '~/loaders/characters.data'
import { Character } from '~/types'
import { For, Resource, Show } from 'solid-js'

type CharacterItemProps = {
	character: Resource<Character | undefined>
}
export const CharacterItemResult = ({ character }: CharacterItemProps) => {
	return (
		<Show when={character()} fallback={<div>Cargando...</div>}>
			<article class="card w-96 bg-base-100 shadow-xl">
				<figure class="px-10 pt-10">
					<img
						src={character()!.image.url}
						alt={`Imagen de ${character.name}`}
						class="rounded-xl"
					/>
				</figure>
				<aside class="card-body items-center text-center">
					<h2 class="card-title">{character.name}</h2>
					<p
						class={`${
							character()!.biography.alignment === 'good'
								? 'text-emerald-500'
								: 'text-red-500'
						}`}
					>
						{character()!.biography.alignment.toUpperCase()}
					</p>
				</aside>
			</article>
		</Show>
	)
}

const CharacterById = () => {
	const character = useRouteData<typeof CharacterByIdData>()
	const isRouting = useIsRouting()

	return (
		<section class="grid place-items-center h-screen">
			<h2>{character()?.name}</h2>
			<Show when={!isRouting()} fallback={<div>Cargando personaje....</div>}>
				<CharacterItemResult character={character} />
			</Show>
		</section>
	)
}

export default CharacterById
