import { useEffect, useState } from "react";
import Container1 from "./container1";
import Teclado from "./teclado";
import { items as datos } from "../palabras/palabras";


export default function Juego1(){
    const[letras1, setLetras1] = useState(["1", "", "", "", "", "", ""]);
    const[letras2, setLetras2] = useState(["1", "1", "1", "", "1", "1","1"]);
    const[letras3, setLetras3] = useState(["1", "", "", "", "", "","1"]);
    const[letras4, setLetras4] = useState(["1", "1", "", "", "", "" , "1"]);
    const[letras5, setLetras5] = useState(["1", "1", "1", "", "1", "1","1"]);
    const[letras6, setLetras6] = useState(["", "", "", "", "", "", "1"]);
    const[letrasCorrectas, setLetrasCorrectas] = useState([]);
    const[letrasIncorrectas, setLetrasIncorrectas] = useState([]);
    const[nivel, setNivel] = useState(1);
    const[palabras,setPalabras] = useState([]);
    const[items,setItems] = useState(datos);
    const[tiempo,setTiempo] = useState(0);
    const[tiempoUnix,setTiempoUnix] = useState(0);
    const[errores,setErrores] = useState(0);
    const[aciertos,setAciertos] = useState(0);

    useEffect(()=>{
       const numero = Math.floor(Math.random() * (items.length + 1));
       const data= items[numero];
       setPalabras(data);
       console.log(palabras.id)
    }, [])


    function jugar(){
        if(palabras && Object.keys(palabras).length !== 0){
            let segundos = 0;
            const intervalId = setInterval(() => {
            segundos++;
            setTiempo(segundos); 
            }, 1000);
           
            const unixTime = Math.floor(Date.now() / 1000);
            console.log(unixTime);  
            setTiempoUnix(unixTime);  
        }else{
            alert("error");
        }
    }

    function revisar(item){
      
        if(nivel===1){
            if(palabras.palabra1.includes(item)){
                const posiciones = [];
                let posicion = palabras.palabra1.indexOf(item);

                while (posicion !== -1) {
                posiciones.push(posicion);
                posicion = palabras.palabra1.indexOf(item, posicion + 1);
                }
                console.log(posiciones);
                posiciones.map((items)=>{
                    if(items===0){const nuevoArr=[...letras1] ; nuevoArr[3]=item; setLetras1(nuevoArr);}
                    if(items===1){const nuevoArr=[...letras2] ; nuevoArr[3]=item; setLetras2(nuevoArr);}
                    if(items===2){const nuevoArr=[...letras3] ; nuevoArr[3]=item; setLetras3(nuevoArr);}
                    if(items===3){const nuevoArr=[...letras4] ; nuevoArr[3]=item; setLetras4(nuevoArr);}
                    if(items===4){const nuevoArr=[...letras5] ; nuevoArr[3]=item; setLetras5(nuevoArr);}
                    if(items===5){const nuevoArr=[...letras6] ; nuevoArr[3]=item; setLetras6(nuevoArr);}
                })
                setLetrasCorrectas([...letrasCorrectas, item]);
                setAciertos(aciertos + posiciones.length);
                console.log(letrasCorrectas);
                console.log(aciertos);
                if(aciertos+1===6){
                    setNivel(2);
                    setLetrasCorrectas([]);
                    setLetrasIncorrectas([]);
                    setAciertos(0);
                }
            }else {
                setLetrasIncorrectas([...letrasIncorrectas, item]);
                setErrores(errores + 1);
                if(errores===2){
                    setTiempo(tiempo + 10);
                    setErrores(0);
                }
            }
        }

        if(nivel===2){
            if(palabras.palabra2.includes(item)){
                const posiciones = [];
                let posicion = palabras.palabra2.indexOf(item);

                while (posicion !== -1) {
                posiciones.push(posicion);
                posicion = palabras.palabra2.indexOf(item, posicion + 1);
                }
                console.log(posiciones);
                posiciones.map((items)=>{
                    if(items===0){const nuevoArr=[...letras1] ; nuevoArr[1]=item; setLetras1(nuevoArr);}
                    if(items===1){const nuevoArr=[...letras1] ; nuevoArr[2]=item; setLetras1(nuevoArr);}
                    if(items===2){const nuevoArr=[...letras1] ; nuevoArr[3]=item; setLetras1(nuevoArr);}
                    if(items===3){const nuevoArr=[...letras1] ; nuevoArr[4]=item; setLetras1(nuevoArr);}
                    if(items===4){const nuevoArr=[...letras1] ; nuevoArr[5]=item; setLetras1(nuevoArr);}
                    if(items===5){const nuevoArr=[...letras1] ; nuevoArr[6]=item; setLetras1(nuevoArr);}
                })
                setLetrasCorrectas([...letrasCorrectas, item]);
                setAciertos(aciertos + posiciones.length);
                console.log(letrasCorrectas);
                console.log(aciertos);
                if(aciertos+1===6){
                    setNivel(3);
                    setLetrasCorrectas([]);
                    setLetrasIncorrectas([]);
                    setAciertos(0);
                }
            }else {
                setLetrasIncorrectas([...letrasIncorrectas, item]);
                setErrores(errores + 1);
                if(errores===2){
                    setTiempo(tiempo + 10);
                    setErrores(0);
                }
            }
        }    
        if(nivel===3){
            if(palabras.palabra3.includes(item)){
                const posiciones = [];
                let posicion = palabras.palabra3.indexOf(item);

                while (posicion !== -1) {
                posiciones.push(posicion);
                posicion = palabras.palabra3.indexOf(item, posicion + 1);
                }
                console.log(posiciones);
                posiciones.map((items)=>{
                    if(items===0){const nuevoArr=[...letras3] ; nuevoArr[1]=item; setLetras3(nuevoArr);}
                    if(items===1){const nuevoArr=[...letras3] ; nuevoArr[2]=item; setLetras3(nuevoArr);}
                    if(items===2){const nuevoArr=[...letras3] ; nuevoArr[3]=item; setLetras3(nuevoArr);}
                    if(items===3){const nuevoArr=[...letras3] ; nuevoArr[4]=item; setLetras3(nuevoArr);}
                    if(items===4){const nuevoArr=[...letras3] ; nuevoArr[5]=item; setLetras3(nuevoArr);}
                
                })
                setLetrasCorrectas([...letrasCorrectas, item]);
                setAciertos(aciertos + posiciones.length);
                console.log(letrasCorrectas);
                console.log(aciertos);
                if(aciertos+1===5){
                    setNivel(4);
                    setLetrasCorrectas([]);
                    setLetrasIncorrectas([]);
                    setAciertos(0);
                }
            }else {
                setLetrasIncorrectas([...letrasIncorrectas, item]);
                setErrores(errores + 1);
                if(errores===2){
                    setTiempo(tiempo + 10);
                    setErrores(0);
                }
            }
        }    
        if(nivel===4){
            if(palabras.palabra4.includes(item)){
                const posiciones = [];
                let posicion = palabras.palabra4.indexOf(item);

                while (posicion !== -1) {
                posiciones.push(posicion);
                posicion = palabras.palabra4.indexOf(item, posicion + 1);
                }
                console.log(posiciones);
                posiciones.map((items)=>{
                    if(items===0){const nuevoArr=[...letras4] ; nuevoArr[2]=item; setLetras4(nuevoArr);}
                    if(items===1){const nuevoArr=[...letras4] ; nuevoArr[3]=item; setLetras4(nuevoArr);}
                    if(items===2){const nuevoArr=[...letras4] ; nuevoArr[4]=item; setLetras4(nuevoArr);}
                    if(items===3){const nuevoArr=[...letras4] ; nuevoArr[5]=item; setLetras4(nuevoArr);}
                })
                setLetrasCorrectas([...letrasCorrectas, item]);
                setAciertos(aciertos + posiciones.length);
                console.log(letrasCorrectas);
                console.log(aciertos);
                if(aciertos+1===4){
                    setNivel(5);
                    setLetrasCorrectas([]);
                    setLetrasIncorrectas([]);
                    setAciertos(0);
                }
            }else {
                setLetrasIncorrectas([...letrasIncorrectas, item]);
                setErrores(errores + 1);
                if(errores===2){
                    setTiempo(tiempo + 10);
                    setErrores(0);
                }
            }
        }    
        if(nivel===5){
            if(palabras.palabra5.includes(item)){
                const posiciones = [];
                let posicion = palabras.palabra5.indexOf(item);

                while (posicion !== -1) {
                posiciones.push(posicion);
                posicion = palabras.palabra5.indexOf(item, posicion + 1);
                }
                console.log(posiciones);
                posiciones.map((items)=>{
                    if(items===0){const nuevoArr=[...letras6] ; nuevoArr[0]=item; setLetras6(nuevoArr);}
                    if(items===1){const nuevoArr=[...letras6] ; nuevoArr[1]=item; setLetras6(nuevoArr);}
                    if(items===2){const nuevoArr=[...letras6] ; nuevoArr[2]=item; setLetras6(nuevoArr);}
                    if(items===3){const nuevoArr=[...letras6] ; nuevoArr[3]=item; setLetras6(nuevoArr);}
                    if(items===4){const nuevoArr=[...letras6] ; nuevoArr[4]=item; setLetras6(nuevoArr);}
                    if(items===5){const nuevoArr=[...letras6] ; nuevoArr[5]=item; setLetras6(nuevoArr);}
                })
                setLetrasCorrectas([...letrasCorrectas, item]);
                setAciertos(aciertos + posiciones.length);
                console.log(letrasCorrectas);
                console.log(aciertos);
                if(aciertos+1===6){
                    setNivel(7);
                    setLetrasCorrectas([]);
                    setLetrasIncorrectas([]);
                    setAciertos(0);
                }
            }else {
                setLetrasIncorrectas([...letrasIncorrectas, item]);
                setErrores(errores + 1);
                if(errores===2){
                    setTiempo(tiempo + 10);
                    setErrores(0);
                }
            }
        }    



    }

    return(
      
        <div >
            <div><button onClick={jugar}>JUGAR</button></div>   
            <div><button>Salir</button></div>
            <div  >
            <div>
               <label>tiempo de juego: {tiempo}</label> <br></br>
               <label>{nivel===7? "GANASTEEEEE" : ""}</label> 
            </div>    
            <div style={{margin: '1rem', display:'flex' , flexDirection:'column' , alignItems:'center'}}> 
            
                <div><Container1 letrasData={letras1} nivel={nivel} contain={1} /></div>
                <div style={{marginTop: 1}}><Container1 letrasData={letras2} nivel={nivel} contain={2} /></div>
                <div><Container1 letrasData={letras3} nivel={nivel} contain={3} /></div>
                <div><Container1 letrasData={letras4} nivel={nivel} contain={4} /></div>
                <div><Container1 letrasData={letras5} nivel={nivel} contain={5} /></div>
                <div><Container1 letrasData={letras6} nivel={nivel} contain={6} /></div> 
                      
            </div>
             <div>
                 <Teclado correctas={letrasCorrectas} incorrectas={letrasIncorrectas} revisa={revisar} />
             </div>
            </div>
        </div>
            
        )
     
       
}