import { pedirCanciones } from '../services/servicioSpotify'
import './Music.css'
import { useEffect }   from 'react'
export function Music(){

    useEffect(function(){
        pedirCanciones()
        .then(function(respuesta){
            console.log(respuesta)
        })
        .catch(function(respuestaError){
            console.log(respuestaError)
        })
    },[])

    return(

        <>
            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col">
                        <div className="card h-100 shadow p3">
                                <h3>Cancion 1</h3>
                            </div>    
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow p3">
                            <h3>Cancion 1</h3>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow p3">
                            <h3>Cancion 1</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}