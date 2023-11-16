
    export async function pedirCanciones(){
        const url="https://accounts.spotify.com/api/token"
        const urlCanciones="https://api.spotify.com/v1/artists/4ZDoy7AWNgQVmX7T0u0B1j/top-tracks?market=us"
        const grant_type="client_credentials"
        const client_id ="93cb930099214a7fa3ca93128a0402c6" 
        const client_secret="fb47db6b346c4d948e8ce8f99160689a"

        const datos=`grant_type=${grant_type}&&client_id=${client_id}&&client_secret=${client_secret}`

        const peticion={
            method:"POST",
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body:datos
        }
        

        try {
            let respuesta=await fetch(url,peticion)
            let respuestaJSON=await respuesta.json()
            let token=respuestaJSON.token_type+" "+respuestaJSON.access_token
     
            //ya tengo un token debo ir por las canciones
            const peticionCanciones={
                method:"GET",
                headers:{"Authorization":token}
            }
            let canciones=await fetch(urlCanciones,peticionCanciones)
            let cancionesJSON=canciones.json()
            return cancionesJSON
            
            
        } catch (error) {
            console.log(error)
        }


    }