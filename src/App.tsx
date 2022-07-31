import { Component, JSXElement, lazy } from 'solid-js'
import { Route, Routes, NavLink } from '@solidjs/router'
import { CharacterByIdData, ViewCharacters } from '~/loaders/characters.data'
import SolidLogo from './logo.svg'
interface Props {
	children: JSXElement
}
export const CharactersLayout: Component<Props> = ({ children }) => {
	return (
		<>
			<header class="bg-primary top-0 sticky z-10">
				<nav class="navbar container mx-auto">
					<aside class="flex-1">
						<h1 class="text-xl normal-case btn btn-ghost">
							<NavLink href="/characters/home">Home</NavLink>
						</h1>
					</aside>
					<aside class="hidden space-x-4 navbar-end xl:flex">
						<ul class="p-0 space-x-3 menu menu-horizontal">
							<li tabIndex={0}>
								<span>
									Personajes
									<svg
										class="fill-current"
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
									>
										<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
									</svg>
								</span>
								<ul class="p-2 bg-base-200">
									<li>
										<NavLink href="/characters/view" activeClass="bg-base-100">
											Ver personajes
										</NavLink>
									</li>
									<li>
										<NavLink href="/characters/search">
											Buscar personajes
										</NavLink>
									</li>
								</ul>
							</li>
						</ul>
					</aside>
					<aside class=" navbar-end xl:hidden">
						<div class="dropdown dropdown-end">
							<label tabIndex={0} class="btn btn-ghost btn-circle">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-5 h-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 6h16M4 12h16M4 18h7"
									/>
								</svg>
							</label>
							<ul
								tabIndex={0}
								class="p-2 mt-3 space-y-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 "
							>
								<li>
									<NavLink href="/characters/view" activeClass="bg-base-100">
										Ver personajes
									</NavLink>
								</li>
								<li>
									<NavLink href="/characters/search">Buscar personajes</NavLink>
								</li>
							</ul>
						</div>
					</aside>
				</nav>
			</header>
			<main class="min-h-screen">{children}</main>
			<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
				<p class="flex flex-row items-center">
					<span class="text-xl">Hecho con </span>
					<a href="https://www.solidjs.com/">
						<img class="w-12 h-12" src={SolidLogo} alt="Logo de SolidJS" />
					</a>
				</p>
			</footer>
		</>
	)
}
const App: Component = () => {
	
	return (
		<Routes>
			<Route path="/" component={lazy(() => import('./views/Home'))} />
			<Route
				path="/characters"
				component={lazy(() => import('./views/characters.outlet'))}
			>
				<Route
					path="/home"
					component={lazy(() => import('./views/characters/home'))}
				/>
				<Route
					path="/view"
					component={lazy(() => import('./views/characters/view'))}
					data={ViewCharacters}
				/>
				<Route
					path="/search"
					component={lazy(() => import('./views/characters/search'))}
				/>
				<Route
					path="/:id"
					component={lazy(() => import('./views/characters/$id'))}
					data={CharacterByIdData}
				/>
			</Route>
		</Routes>
	)
}

export default App
