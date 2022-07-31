import { Link } from '@solidjs/router'
import HeroLandingImage from '../assets/hero-landing.png'
const HomeLanding = () => {
	return (
		<main class="h-screen bg-base-100 font-lato">
			<section class="h-full hero ">
				<article class="flex-col hero-content lg:flex-row">
					<img
						src={HeroLandingImage}
						class="rounded-lg shadow-md"
						height={500}
						width={500}
						alt="Imagen principal de la Landing Clox"
					/>
					<aside class="text-center">
						<h1 class="text-4xl font-bold  text-transparent  bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
							Busca y arma tu equipo favorito del universo de comics!
						</h1>
						<p class="py-6 text-gray-500">
							En Clox, puedes elegir y añadir distíntos personajes a tu equipo,
							ya sea del mundo Marvel, DC y más.
						</p>
						<Link href="/characters/home" class="btn btn-secondary">
							Pruebalo ya!
						</Link>
					</aside>
				</article>
			</section>
		</main>
	)
}

export default HomeLanding
