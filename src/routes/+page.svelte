<script>
	import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
	import Products from "$lib/components/Products.svelte";
	import Uptotop from "$lib/components/Uptotop.svelte";

</script>


<Header></Header>

<section class="hero is-medium header" id="header">
    <div class="hero-body has-text-centered">
      <p class="title has-text-light">NUESTRA CARTA</p>
      <p class="subtitle has-text-light">Las mejores hamburguesas</p>
    </div>
</section>

<Products></Products>

<Footer></Footer>
<Uptotop></Uptotop>

<style>
.header {
    background: url('/images/header_hamburguesas.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>