import { Link, useIsRouting, useRouteData } from '@solidjs/router'
import { createSignal, For, Resource, Show } from 'solid-js'
import { ViewCharacters } from '~/loaders/characters.data'
import { Character } from '~/types'

type CharacterListProps = {
	characters: Resource<Character[] | undefined>
}
type CharacterItemProps = {
	character: Character
}
type PaginationState = {
	characters: Character[] | undefined
	pages: number
}
export const CharacterItem = ({ character }: CharacterItemProps) => {
	return (
		<article class="card w-96 bg-base-100 shadow-xl">
			<figure class="px-10 pt-10">
				<img
					src={character.image.url}
					alt={`Imagen de ${character.name}`}
					width={500}
					height={500}
					class="rounded-xl"
				/>
			</figure>
			<aside class="card-body items-center text-center">
				<h2 class="card-title">{character.name}</h2>
				<p
					class={`${
						character.biography.alignment === 'good'
							? 'text-emerald-500'
							: 'text-red-500'
					}`}
				>
					{character.biography.alignment.toUpperCase()}
				</p>
				<div class="card-actions">
					<Link href={`/characters/${character.id}`} class="btn btn-primary">
						Ver personaje
					</Link>
				</div>
			</aside>
		</article>
	)
}
export const CharacterList = ({ characters }: CharacterListProps) => {
	const [pages, setPages] = createSignal(12)

	return (
		<>
			<section class="grid xl:grid-cols-3 grid-cols-1 gap-3 place-items-center mb-3">
				<For each={characters()}>
					{(character) => <CharacterItem character={character} />}
				</For>
			</section>
			<section class="flex flex-row items-center justify-center w-full">
				<button class="btn btn-primary w-full">Ver más</button>
			</section>
		</>
	)
}

const ViewCharactersPage = () => {
	const isRouting = useIsRouting()
	const characters = useRouteData<typeof ViewCharacters>()

	return (
		<>
			<h2 class="text-4xl text-center mb-6 mt-6">Lista de personajes:</h2>
			<Show when={!isRouting()} fallback={<div>Cargando contenido....</div>}>
				<CharacterList characters={characters} />
			</Show>
		</>
	)
}

export default ViewCharactersPage
