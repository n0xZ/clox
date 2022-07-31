import { Link, useIsRouting, useRouteData } from '@solidjs/router'
import { createSignal, For, Resource, Show } from 'solid-js'
import toast from 'solid-toast'
import { useSelectedCharacters } from '~/hooks/useSelectedCharacters'
import { ViewCharacters } from '~/loaders/characters.data'
import { Character } from '~/types'

type CharacterListProps = {
	characters: Resource<Character[] | undefined>
}
type CharacterItemProps = {
	character: Character
}

export const CharacterItem = ({ character }: CharacterItemProps) => {
	const { addHeroToLocalStorage } = useSelectedCharacters()
	return (
		<article class="card w-96 bg-base-100 shadow-xl hover:opacity-80">
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
							? 'badge badge-primary'
							: 'badge badge-error'
					}`}
				>
					{character.biography.alignment.toUpperCase()}
				</p>
				<div class="card-actions flex flex-col">
					<Link
						href={`/characters/${character.id}`}
						class="btn btn-primary w-44"
					>
						Ver personaje
					</Link>
					<button
						class="btn btn-secondary w-44"
						onClick={() => addHeroToLocalStorage(character)}
					>
						Agregar a mi equipo
					</button>
				</div>
			</aside>
		</article>
	)
}
export const CharacterList = ({ characters }: CharacterListProps) => {
	return (
		<section class="grid xl:grid-cols-3 grid-cols-1 gap-3 place-items-center mb-3">
			<For each={characters()}>
				{(character) => <CharacterItem character={character} />}
			</For>
		</section>
	)
}

const ViewCharactersPage = () => {
	const isRouting = useIsRouting()
	const characters = useRouteData<typeof ViewCharacters>()

	return (
		<>
			<h2 class="text-4xl font-bold text-center mb-6 mt-6">Lista de personajes:</h2>
			<Show when={!isRouting()} fallback={<div>Cargando contenido....</div>}>
				<CharacterList characters={characters} />
			</Show>
		</>
	)
}

export default ViewCharactersPage
