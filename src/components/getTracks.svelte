<script >
  import { onMount } from "svelte"; 
 
  
  let myresponse=[];
  
 /*function that gets a prop and transforms it into a local date string */
export function  getLocal(mydate) {
    var mydate = new Date(mydate);
    var localDate = mydate.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return localDate;
  }
  
  export function gototrack(url)
  {
    window.location.href=url;
  }
  
 onMount(async ()=>
 {
  
  var token = window.localStorage.getItem("token");
  const response = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=5", {
  method: "GET",
  headers: {
    Authorization: "Bearer " + token,
  },
}).then((response) => {
  response
    .json()
    .then((response) => {
      myresponse=response.items;
      console.log(myresponse);
     
    })
    .catch((err) => {
      console.log(err);
      
    })}

   )
 })

</script>

  <div class="container" id="todo">
      <div class="row">
        <div class="col">
          <div class="table-fluid bg-light" id="recentTracks">
            <table class="table table-striped table-hover " >
              <thead>
                <tr>
                  <th>Track</th>
                  <th >Artista</th>
                 
                  
                  <th>Album</th>
                  
                  
                </tr>
              </thead>
              <tbody>
                {#each myresponse as item}
                <tr on:click={gototrack(item.track.external_urls.spotify)}>
                  <td id="elNombre">{item.track.name}</td>
                  <td>{item.track.artists[0].name}</td>
                  <td id="elAlbum"><div>{item.track.album.name}</div>
                 
                  <img class="image" src={item.track.album.images[2].url} alt={item.track.name}></td>
                  
                  
                </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  </div>
  <style>
    
    .image
    {
      width: 50px;
      height: 50px;
      border-radius: 80%;
      margin-top: 10px;
    }
    #recentTracks:hover
    {
      
      transform: scale(0.9);
    transition: 0.8s;}
   /*set container-fluid border color to transparent*/
  
      .table
      {
        border: 1px solid transparent;
      }
    
    #todo
    { position: absolute;
      user-select: none; 
      background-color: transparent;
      top: 70px;

      left: 10%;
      
      display: flex;
      
    }
    #recentTracks
    {
     
      border-radius: 20px ;
      transform: scale(1);
      transition: 0.8s;
      box-shadow: 10px 10px 5px 1px rgba(0, 0, 0, 0.6);
    }

    th, td
    
    {
      font-size: smaller;
      text-align:  center;
      cursor: pointer;
    }
    
    #elAlbum
    {
      text-align: center;
    }
    td
    {
      margin-top: 50px;
      text-align: justify center;
      padding: 10px;
    }
    #elNombre
    {
      position: relative;
      margin:60px;
      text-align: center;
    }
    @media only screen and (max-width: 600px) {
      table
    {
      overflow: scroll
      ;
    }
    }
   
  </style>