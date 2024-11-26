<script>
    import { patatasFritas } from '$lib/frenchfries.js'; 

</script>


<section class="products has-background-light pt-6" id="frenchfries">
<div class="container">
    <section class="hero is-flex is-flex-direction-row is-align-items-center pl-3">
        <div class="hero__icons">
            <img src="./icons/frenchfries_icon.svg" alt="icono de patatas fritas" width="60px">
        </div>
        <div class="hero-body">
          <p class="title has-text-black">Patatas Fritas</p>
          <p class="subtitle">Patatas ricas y sabrosas</p>
        </div>
      </section>
    <div class="products__container grid is-col-min-10 p-3">
        {#each patatasFritas as item }
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
        <div class="products__box--salsas cell">
            <div class="products__card--salsas is-flex is-justify-content-center is-align-items-start">
                <div class="products__details--salsas has-background-warning  p-3">
                    <h4 class="products__h4 title is-5 has-text-light has-text-centered">
                        PRUÉBALAS CON NUESTRAS SALSAS
                    </h4>
                   
                </div>
            </div>
        </div>
    </div>
</div>
</section>


<style>

.products__img{
    border-radius: 15px;
}

.products__card--salsas{
    height: 100%;
    border-radius: 15px;
    background: url('/images/salsa.avif');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transform: scaleY(-1);
}

.products__details--salsas{
    background-color: black;
    border-radius: 15px;
    margin: 1rem;
    transform: scaleY(-1);

}
</style>