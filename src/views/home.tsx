import { Link, Outlet } from '@solidjs/router'

const HomeLanding = () => {
	return (
		<>
			<header>
				<nav>
					<ul>
						<li></li>
						<li></li>
					</ul>
				</nav>
			</header>
			<main class="h-screen">
				<section class="h-full hero ">
					<article class="flex-col hero-content lg:flex-row">
						<aside class="text-center">
							<h1 class="text-5xl font-bold">
								Busca tu personaje favorito de Marvel!
							</h1>
							<p class="py-6">Clox es una página web</p>
							<Link href="/characters/home" class="btn btn-secondary">
								Comenzar ya
							</Link>
						</aside>
					</article>
				</section>
			</main>
		</>
	)
}

export default HomeLanding
