import { Link } from '@solidjs/router'
import { Accessor, createSignal, For, Show } from 'solid-js'
import { Character } from '~/types'

const getSelectedHeroes = () => {
	const selectedHeroes = JSON.parse(
		String(localStorage.getItem('selected-characters'))
	) as Character[]
	return selectedHeroes
}

const SelectedCharacter = ({ character }: { character: Character }) => {
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
			</aside>
		</article>
	)
}

const SelectedCharacters = ({
	selectedCharacters,
}: {
	selectedCharacters: Accessor<Character[] | null>
}) => {
	return (
		<section class="grid place-items-center h-screen">
			<For each={selectedCharacters()}>
				{(character) => <SelectedCharacter character={character} />}
			</For>
		</section>
	)
}

export default function CharactersHome() {
	const [myCharacters, setMyCharacters] = createSignal<Character[] | null>(
		getSelectedHeroes()
	)

	return (
		<>
			<Show
				when={myCharacters()}
				fallback={
					<section>
						<p class="flex flex-row items-center">
							Al parecer no tienes heroes escogidos. Puedes elegirlos{' '}
							<Link href="/characters/view"> clickeando aquí</Link>
						</p>
					</section>
				}
			>
				<SelectedCharacters selectedCharacters={myCharacters} />
			</Show>
		</>
	)
}
