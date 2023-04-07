import { useState } from "react"

export default function Teclado({ correctas, incorrectas, revisa }){

    const style1={
        backgroundColor:"green",
        borderRadius:"5px",
    }
    const style2={
        backgroundColor:"red",
        borderRadius:"5px",
    }
    const style3={
        backgroundColor:"grey",
        borderRadius:"5px",
    }

    const[teclas1, setTeclas1] = useState(["Q","W","E","R","T","Y","U","I","O","P"]); 
    const[teclas2, setTeclas2] = useState(["A","S","D","F","G","H","J","K","L","Ñ"]);
    const[teclas3, setTeclas3] = useState(["Z","X","C","V","B","N","M"]);
    const[corrects, setCorrects] = useState(correctas);
    const[incorrects, setInorrects] = useState(incorrectas);
    

    function styles(item){

        if (correctas.includes(item)) {
            return style1;
          }else {
            if (incorrectas.includes(item)) {
                return style2;
              }else {
                return style3;
              }  
          }
    }

    function revisar2(item){
        if(correctas.includes(item)===false && incorrectas.includes(item)===false){
            revisa(item);
        }
    }



    return(
        <div style={{marginTop: '1rem'}}>
           <div>{teclas1.map((item)=>(<button key={item} style={styles(item)} onClick={(event) => revisar2(event.target.textContent)}>{item}</button>))}</div>
           <div>{teclas2.map((item)=>(<button key={item} style={styles(item)} onClick={(event) => revisar2(event.target.textContent)}>{item}</button>))}</div>
           <div>{teclas3.map((item)=>(<button key={item} style={styles(item)} onClick={(event) => revisar2(event.target.textContent)}>{item}</button>))}</div> 
        </div>
    )
}