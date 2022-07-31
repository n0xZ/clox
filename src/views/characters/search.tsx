import {
	createResource,
	createSignal,
	For,
	Resource,
	Show,
	Suspense,
} from 'solid-js'
import { getCharacterByName } from '~/services/characters'
import { Character } from '~/types'
import { CharacterItem } from './view'
type CharacterListProps = {
	characters: Character[] | undefined
}
export const CharacterListResults = ({ characters }: CharacterListProps) => {
	return (
		<section class="grid xl:grid-cols-3 grid-cols-1 gap-3 place-items-center">
			<Show when={characters?.length !== 0}>
				<For each={characters}>
					{(character) => <CharacterItem character={character} />}
				</For>
			</Show>
		</section>
	)
}

const SearchCharacters = () => {
	const [name, setName] = createSignal('')
	const [data] = createResource(name, getCharacterByName)
	const handleChange = (
		e: Event & { currentTarget: HTMLInputElement; target: Element }
	) => {
		setName(e.currentTarget.value)
	}
	const handleReset = () => {
		setName('')
	}

	return (
		<Suspense fallback={<div>Cargando página...</div>}>
			<div class="min-h-screen flex flex-col items-center space-y-4">
				<h2 class="text-center  font-bold xl:text-4xl text-xl mt-3">Buscar personaje</h2>
				<aside class="form-control">
					<label class="label">
						<span class="label-text">Personaje a buscar</span>
					</label>

					<span class="flex xl:flex-row flex-col xl:space-y-0  space-y-3 items-center space-x-3">
						<input
							class="input input-bordered input-primary w-full max-w-xs"
							type="text"
							placeholder="Por ej... Superman."
							name="name"
							value={name()}
							onChange={handleChange}
						/>
						<button class="btn btn-primary" onClick={() => handleReset()}>
							Reiniciar busqueda
						</button>
					</span>
				</aside>

				<Show when={!data.loading} fallback={<div>Cargando....</div>}>
					<Show when={data()?.response !== 'error'}>
						<>
							<h2>Resultados de Busqueda: {name()}</h2>
							<CharacterListResults characters={data()?.results} />
						</>
					</Show>
				</Show>
				<Show
					when={
						!data.loading && data()?.response === 'error' && name().length > 0
					}
					fallback={<div></div>}
				>
					<p>No se han encontrado resultados.</p>{' '}
				</Show>
			</div>
		</Suspense>
	)
}

export default SearchCharacters
