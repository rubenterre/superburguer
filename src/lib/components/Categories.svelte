<script>
    const categories = [
        { icono: "../icons/hamburguers_icon.svg",
          categorie:  "HAMBURGUESAS",
          url: "#hamburguers"
    },
    { icono: "../icons/frenchfries_icon.svg",
          categorie:  "PATATAS FRITAS",
          url: "#frenchfries"
    },
    { icono: "../icons/desserts_icon.svg",
          categorie:  "POSTRES",
          url: "#desserts"
    }
]

</script>
<section class="categories has-background-light pt-6">
    <div class="container">
        <div class="is-flex is-justify-content-center is-align-items-center is-flex-wrap-wrap ">
            {#each categories as item }
            <div class="categories__box m-3">
                <div class="categories__card is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                        <img src="{item.icono}" alt="{item.categorie}" class="categories__logo mb-5">

                        <h3 class="categories__h3 subtitle is-6 has-text-black">
                            {item.categorie}
                        </h3>

                        <a class="has-text-warning" href={item.url}>
                            Vér más
                        </a>
                </div>
            </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .categories__card{
       width: 210px;
       height: 210px;
       border-radius: 15px;
       border: 1px solid #ffb70f;
    }

    .categories__logo{
        height: 60px;
    }
</style>