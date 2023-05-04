<script lang="ts">
    import Navbar from "../components/navbar.svelte";
    import { onMount } from "svelte";

    let isloaded:boolean=false;

    onMount(()=>
    {
        isloaded=true;
    })

</script>
<!--LOADING FROM PROPERTY THE NAVBAR IMAGE-->
<Navbar image="./src/assets/sets.bmp"/>
 
{#if !isloaded}
 
<!--IF COMPONENT IS NOT LOADED WE WANT A LOADING CSS ROLL SO ITS IMPORTANT WE SET IT RIGHT NEXT DOWN TO SLOTS SECTION -->
<div class="roll"></div> 
 
{:else}
<slot></slot>
{/if}
 




<style>
   /*fit navbar*/
 
    .roll {
    position: absolute;
    left: 47%;
   top: 2%;
    z-index: 9999;
    border: 8px solid #f3f3f3; /* Light grey */
    border-top: 8px solid black; /* Blue */
    border-radius: 50%;
    width: 10vw;
    height: 10vw;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@media (max-width: 600px) {
    .roll {
        position: absolute;
    left: 35%;
    
    z-index: 9999;
    border: 8px solid #f3f3f3; /* Light grey */
    border-top: 8px solid black; /* Blue */
    border-radius: 50%;
    width: 10vw;
    height: 10vw;
    animation: spin 2s linear infinite;
    }
 

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

}
</style>