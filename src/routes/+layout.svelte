<svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Menú - Hamburguesería SuperBurguer</title>
    <meta name="description" content="Menú de Hamburguesería SuperBurguer" />
    <meta name="keywords" content="Menú, hamburguesas, comida, patatas fritas, postres, helados" />
    <meta name="author" content="Rubén Terré" />
    <meta name="website" content="https://rubenterre.com" />
    <meta name="email" content="info@rubenterre.com" />
    <meta name="version" content="1.0.0" />
  
	<!-- manifest PWA -->
  <link rel="manifest" href="manifest.json">

  	<!-- Favicons -->
	<link rel="shortcut icon" href="./favicon/favicon_60x60.png" />
	<link rel="apple-touch-icon" href="./favicon/favicon_60x60.png" />
	<link rel="apple-touch-icon" sizes="76x76" href="./favicon/favicon_76x76.png" />
	<link rel="apple-touch-icon" sizes="120x120" href="./favicon_120x120.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="./favicon/favicon_152x152.png" />
	<link rel="apple-touch-icon" sizes="512x512" href="./favicon/favicon_512x512.png" />


    <!-- Bulma CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
</svelte:head>

<script>
  	import { onMount } from 'svelte';

onMount(() => {
  if ('serviceWorker' in navigator) {
    console.log('Puedes usar los serviceWorker en tu navegador');

    navigator.serviceWorker
      .register('./service-worker.js')
      .then((res) => console.log('serviceWorker cargado correctamente', res))
      .catch((err) => console.log('serviceWorker No ha cargado correctamente', err));
  } else {
    console.log('NO puedes usar los serviceWorker en tu navegador');
  }
});
</script>


  <slot></slot>

  <style>
    :global(html){
      scroll-behavior: smooth;
    }
  </style>

