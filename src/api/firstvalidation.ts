
export function start() {

let  url=`https://accounts.spotify.com/authorize?&response_type=${import.meta.env.VITE_RESPONSE_TYPE}&client_id=${import.meta.env.VITE_CLIENT_ID}&scope=${import.meta.env.VITE_SCOPES}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}`
      const res = fetch(
        "/start",
        {
            method: 'GET',
            
        }
    ).then(res=>
    {
        setTimeout(() => {
          
            window.localStorage.removeItem('token');
            window.localStorage.setItem('status', 'false');
            console.log('hola')
        }, 20*1000);
        window.location.href=url;
        
       
    })
    .catch(err=>
    
    {
        console.log(err);
        return "";
    })
    return url;
}