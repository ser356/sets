<script>
  export let image;
</script>
<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid d-flex">
         
        <a href="/" title="sets, tus listas personalizadas" >
          <img src={image} style="border-radius:8px" width="30" height="30" class="d-inline-block align-top" alt="">
          
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navBarInfo" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navBarInfo">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="http://www.github.com/ser356">GitHub</a>
                </li>
                <li class="nav-item">
                  
                  <a  class="nav-link" href="/about">Acerca de</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/privacy">Privacidad</a>
                </li>
            </ul>
          </div>
    </div>
</nav>

 
  