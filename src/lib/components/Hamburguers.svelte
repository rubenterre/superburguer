<script>
    	import { hamburguesas } from '$lib/hamburguers.js'; 

</script>


<section class="products has-background-light pt-6" id="hamburguers">
	<div class="container">
		<section class="hero is-flex is-flex-direction-row is-align-items-center pl-3">
			<div class="hero__icons">
				<img src="./icons/hamburguers_icon.svg" alt="icono de hamburguesa" width="60px">
			</div>
			<div class="hero-body">
			  <p class="title has-text-black">Hamburguesas</p>
			  <p class="subtitle">Con la mejor carne de vacuno</p>
			</div>
		  </section>
		<div class="products__container grid is-col-min-10 p-3">
			{#each hamburguesas as item }
			<div class="products__box cell">
				<div class="products__card">
					<div class="products__image p-3">
						<img class="products__img" src="{item.imagen}" alt="{item.nombre}">
					</div>
					<div class="products__details p-3">
						<h4 class="products__h4 title is-4 has-text-dark">
							{item.nombre}
						</h4>
						<p class="products__p">
							{item.descripcion}
						</p>
						<div class="products__actions">
							<h5 class="products__h5 has-text-warning">
								{item.precio}€
							</h5>
						</div>
					</div>
				</div>
			</div>
			{/each}
		</div>
	</div>
</section>


<style>

	.products__img{
		border-radius: 15px;
	}
</style>