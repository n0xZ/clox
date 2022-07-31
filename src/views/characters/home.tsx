import { Link } from '@solidjs/router'
import { Accessor, createSignal, For, Show } from 'solid-js'
import { useSelectedCharacters } from '~/hooks/useSelectedCharacters'
import { Character } from '~/types'

const SelectedCharacter = ({
	character,
	removeHeroFromLocalStorage,
}: {
	character: Character
	removeHeroFromLocalStorage: (char: Character) => void
}) => {
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
							? 'badge badge-primary'
							: 'badge badge-error'
					}`}
				>
					{character.biography.alignment.toUpperCase()}
				</p>

				<For each={Object.values(character.powerstats)}>
					{(element, id) => (
						<p>
							{Object.keys(character.powerstats)[id()].toUpperCase()} :{' '}
							{element}
						</p>
					)}
				</For>
				<div class="card-actions flex flex-col">
					<Link
						href={`/characters/${character.id}`}
						class="btn btn-primary w-44"
					>
						Ver personaje
					</Link>
					<button
						class="btn btn-error w-44"
						onClick={() => removeHeroFromLocalStorage(character)}
					>
						Eliminar de mi equipo
					</button>
				</div>
			</aside>
		</article>
	)
}

const SelectedCharacters = ({
	selectedCharacters,
	removeHeroFromLocalStorage,
}: {
	selectedCharacters: Accessor<Character[] | null>
	removeHeroFromLocalStorage: (char: Character) => void
}) => {
	return (
		<section class="grid xl:grid-cols-3 grid-cols-1 gap-3 place-items-center mb-3">
			<For each={selectedCharacters()}>
				{(character) => (
					<SelectedCharacter
						character={character}
						removeHeroFromLocalStorage={removeHeroFromLocalStorage}
					/>
				)}
			</For>
		</section>
	)
}
const EmptySelectedCharacters = () => {
	return (
		<section>
			<p class="flex flex-row items-center">
				Al parecer no tienes heroes escogidos.
			</p>
			<Link href="/characters/view"> Puedes elegirlos clickeando aquí</Link>
		</section>
	)
}
export default function CharactersHome() {
	const { myCharacters, removeHeroFromLocalStorage } = useSelectedCharacters()

	return (
		<>
			<Show when={myCharacters()?.length!== 0} fallback={<EmptySelectedCharacters />}>
				<>
					<h2 class="text-4xl text-center mb-12 mt-3">Mis heroes elegidos</h2>
					<SelectedCharacters
						selectedCharacters={myCharacters}
						removeHeroFromLocalStorage={removeHeroFromLocalStorage}
					/>
				</>
			</Show>
		</>
	)
}
