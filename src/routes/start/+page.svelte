<script lang="ts">
    import { onMount } from 'svelte';
    import {behavior} from './api/sbehavior';
    

  
    
    onMount(async () => {
        /*
        *Read js for information
        *Checks if the redirect is from spotify and if it is, it will get the token and save it in the local storage
        *In any case redirects to the home page
        */
        await  behavior();
    
});







</script>
