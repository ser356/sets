    export function behavior(){
        

    /* Gets redirect uri and splits auth token from it.
    *  Stores token in local storage and redirects to home page
    *  Does not work if user is already logged in
    *  Also puts status true in local storage
    *  Checks if the redirect is from spotify and if it is, it will get the token and save it in the local storage
    *  In any case redirects to the home page
    */
    let  url:string[];
    url = window.location.href.split("&");
    var array=url
    if(array[0]!=import.meta.env.VITE_REDIRECT_URI)
    {

    console.log(array[0]);
    
    var temp = array[0].split("=")[1];
    console.log(temp);
    
    window.localStorage.setItem("status","true");
    window.localStorage.setItem("token",temp);
   

    console.log(temp)
    
    window.location.href=import.meta.env.VITE_NS;
    }
    
    
}