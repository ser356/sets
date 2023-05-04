<script lang="ts" >
import {start} from '../api/firstvalidation';
export let title:string
export let subtitle:string
export let texto:string
export let enlace1:string
export let enlace2:string

</script>

<div class="container d-flex justify-content-around" id="cardComponent">
<div class="card bg-light  " style="width: 18rem;" >
    <div class="card-body bg-transparent" >
        <h5 class="card-title bg-transparent">{title}</h5>
        <h6 class="card-subtitle mb-2 text-muted ">{subtitle}</h6>
        <p class="card-text">{texto }</p>
        <a href="/start" class="card-link">{ enlace1 }</a>
        <a href="/" class="card-link" on:click={start}>{enlace2}</a>
         
    </div>
    </div>
</div>

<style>
 /*hover animation for cardComponent, fancy*/
#cardComponent:hover{
    transform: scale(1.1);
    transition: 0.8s;}
/*on release*/
#cardComponent{
    transform: scale(1);
    transition: 0.8s;}
</style>