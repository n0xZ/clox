import { Link } from '@solidjs/router'
import HeroLandingImage from '../assets/hero-landing.png'
const HomeLanding = () => {
	return (
		<main class="h-screen bg-base-100 font-lato">
			<section class="h-full hero ">
				<article class="flex-col hero-content lg:flex-row">
					<img
						src={HeroLandingImage}
						class="rounded-lg border-[1px] border-secondary"
						height={500}
						width={500}
						alt="Imagen principal de la Landing Clox"
					/>
					<aside class="text-center">
						<h1 class="text-4xl font-bold ">
							Busca tu personaje favorito del universo de comics!
						</h1>
						<p class="py-6 text-gray-500">
							En Clox, puedes elegir y añadir distíntos personajes a tu equipo,
							ya sea del mundo Marvel, DC y más!
						</p>
						<Link href="/characters/home" class="btn btn-secondary">
							Empieza ya
						</Link>
					</aside>
				</article>
			</section>
		</main>
	)
}

export default HomeLanding
