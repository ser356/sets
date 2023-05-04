<script lang="ts">
  import Head from "../components/head.svelte";
  import Cardcomp from "../components/cardcomp.svelte";
  import Usermain from "../components/usermain.svelte";
  import GetTracks from "../components/getTracks.svelte";

  import { onMount } from "svelte";
  import { check } from "./check.js";

  let n = false;
  var token: string | null;
  let nombre = "";
  let imagen = "";
  onMount(async () => {
    token = check();
    if (token != null) {
      n = true;
      const response = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }).then((response) => {
        response
          .json()
          .then((response) => {
            console.log(response);
            nombre = response.display_name;
            if (
              response.images[0].url === undefined ||
              response.display_name === undefined
            ) {
              imagen = "./src/assets/default.png";
              nombre = response.display_name;
            } else {
              imagen = response.images[0].url;
            }
          })
          .catch((err) => {
            window.localStorage.removeItem("token");
            console.log(err);
            nombre = "";
          });
      });
    }
  });
</script>


{#if n === false}
  <div class="main">
    <Head title="sets" />

    <Cardcomp
      title="¡Bienvenido a sets!"
      subtitle="Listas inteligentes para todos."
      texto="Personalizables. En segundos."
      enlace1="FAQ"
      enlace2="¡Empecemos!"
    />
  </div>
{:else}
  <script>
  </script>
  <div class="container ">
    <div class="row-2">
     
      <div class="col-10" id="pic">
          <Usermain {nombre} {imagen} />
      </div>
          <div class="col-10" id="content">
          <GetTracks />
       
          </div>
    </div>
  </div>
{/if}

<style>
  .main {
    z-index: 1111;
  }

 

  @media (max-width: 1200px) {
    
    #content {
      position: absolute;
      top: 1px;
      left: 0px;

 
    }
    #pic
    {
      opacity: 0;
      z-index: -9999;
    }
    
  }
 

</style>
