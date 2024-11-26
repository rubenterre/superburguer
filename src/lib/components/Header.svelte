<script>
  let isActive = false;
  
  function toggleMenu() {
    isActive = !isActive;
  }
</script>

<nav class="navbar is-light" role="navigation" aria-label="main navigation">
<div class="navbar-brand">
  <a class="navbar-item" href="/">
    <img src="./Logo_Superburguer.webp" alt="Logo de hamburguesería Superburguer" width="120">
  </a>

  <button 
    class="navbar-burger" 
    class:is-active={isActive}
    aria-label="menu" 
    aria-expanded={isActive}
    onclick={toggleMenu}
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </button>
</div>

<div class="navbar-menu" class:is-active={isActive}>
  <div class="navbar-start">
    <a class="navbar-item" href="/">
      Inicio
    </a>

    <div class="navbar-item has-dropdown is-hoverable">
      <p class="navbar-link">
        Nuestra carta
      </p>

      <div class="navbar-dropdown">
        <a class="navbar-item" href="/hamburguesas">
          Hamburguesas
        </a>
        <a class="navbar-item" href="/patatas">
          Patatas fritas
        </a>
        <a class="navbar-item" href="/postres">
          Postres
        </a>
      </div>
    </div>
  </div>

  <div class="navbar-end">
    <div class="navbar-item">
      <div class="buttons">
        <a href="tel:234567830" class="button is-dark">
          <strong>¡Llama ahora!</strong>
        </a>
        <a href="https://maps.app.goo.gl/js5VdFwx8nifTTYK6" class="button is-light">
          <strong>Localízanos</strong> 
        </a>
      </div>
    </div>
  </div>
</div>
</nav>