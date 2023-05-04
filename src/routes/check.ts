export  function check():string|null{
    if(window.localStorage.getItem("status")==='true')
    {
        
        return window.localStorage.getItem("token");
    }
        
    else
    {
        window.localStorage.setItem("status","false")
       return null; 
    } 
   

}