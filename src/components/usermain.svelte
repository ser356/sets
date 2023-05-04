<script lang="ts">
  
   
  export let imagen:string;
  export let nombre:string;
</script>
<div class="container d-flex" id="mainContainer">
  <div class="card" style="width: 6rem;" id="cardstrc" >
    <img src={imagen} class="card-img" alt={nombre} id="profilePIC"/>
  </div>
</div>

<style>
  
  #cardstrc
  
  {
    border-style: none;
    position: absolute;
    top: 70px;
    left: 13px;
    box-shadow: 10px 10px 5px 1px rgba(0, 0, 0, 0.6);
    
  }

 
   #mainContainer
   {
   
     width: 70%;
     height: auto;
     margin-top: 1vw;
     z-index: 1;
   }
</style>

 
