import { useEffect, useState } from 'react'
import Container1 from './container1'
import Teclado from './teclado'
import { getRandomWords } from '../palabras/getRandomWords'

const VERTICAL_IDX = 4

export default function Juego1 () {
  //Define mainArray state. Is an Array whit 6 arrays (for words) whit 9 positions for the letters, starting as null value
  const [mainArray, setMainArray] = useState(Array(6).fill(Array(9).fill(null)))
  
  const [letrasCorrectas, setLetrasCorrectas] = useState([])
  const [letrasIncorrectas, setLetrasIncorrectas] = useState([])
  const [nivel, setNivel] = useState(0)
  const [palabras, setPalabras] = useState([])
  const [tiempo, setTiempo] = useState(0)
  const [tiempoUnix, setTiempoUnix] = useState(0)

  useEffect(() => {
    getWords()
  }, [])

  const getWords = async () => {
    //get words
    const words = await getRandomWords()

    //split first word string into array
    let currentWordArr = [...words[0]]

    //add vertical word to array
    let gridArray = mainArray.map((row, rowIdx) =>
      row.map((l, letterIndex) =>
        letterIndex === VERTICAL_IDX
          ? {
              letter: currentWordArr[rowIdx],
              isGuessed: false,
              wordId: 0
            }
          : l
      )
    )

    //map array to add horizontal words
    gridArray = gridArray.map((row, rowIdx) => {
      //get current word
      let word = words[rowIdx + 1]
      //get the letter of the vertical word.
      let mainLetter = row[VERTICAL_IDX].letter
      let [before, after] = word.split(mainLetter, 2)

      //find the index where word it gonna start on the array.
      let letterIdx =
        before.length > 0 ? VERTICAL_IDX - before.length : VERTICAL_IDX + 1

      //currentLetterIndex.
      let currentLetter = 0

      //map each array of word
      return row.map((l, index) => {
        //save the letter to add
        const letter = word[currentLetter]

        // if there is not letter (null) just return.
        if (!word[currentLetter]) return l

        //if the current idx is over the vertical letter skip it and just return.
        if (index === VERTICAL_IDX) {
          if (currentLetter === 0) {
            currentLetter++
            return l
          }

          letterIdx++
          currentLetter++
          return l
        }

        //if the index is in the letterIdx return the new letter
        if (index === letterIdx) {
          //sum variables to next letter
          letterIdx++
          currentLetter++

          return {
            wordId: rowIdx + 1,
            letter: letter,
            isGuessed: false
          }
        }

        //in default case just return.
        return l
      })
    })

    //save it in the state.
    setMainArray(gridArray)
  }

  function jugar () {
    if (palabras && Object.keys(palabras).length !== 0) {
      let segundos = 0
      const intervalId = setInterval(() => {
        segundos++
        setTiempo(segundos)
      }, 1000)

      const unixTime = Math.floor(Date.now() / 1000)
      console.log(unixTime)
      setTiempoUnix(unixTime)
    } else {
      alert('error')
    }
  }

  function revisar (inputLetter) {
    //bolean
    let hasMatched

    //map the array and modify it if letter is correct.
    let newArr = mainArray.map(row => {
      return row.map(word => {
        if (
          removeAccents(word?.letter) === inputLetter.toLowerCase() &&
          word?.wordId === nivel
        ) {
          hasMatched = true
          return { ...word, isGuessed: true }
        } else {
          return word
        }
      })
    })

    //if not has matched return and set incorrect letter
    if (!hasMatched) {
      setLetrasIncorrectas([...letrasIncorrectas, inputLetter])
      return
    }

    //if has matched set the array and set correct letter
    setMainArray(newArr)
    setLetrasCorrectas([...letrasCorrectas, inputLetter])

    //Check if all letters of the same level are guessed. In case of true increment the level and reset the letters
    if (
      newArr.every(row =>
        row.filter(l => l?.wordId === nivel).every(l => l?.isGuessed)
      )
    ) {
      setNivel(nivel + 1)
      setLetrasCorrectas([])
      setLetrasIncorrectas([])
    }
  }

  //remove accents from letter to validate correctly
  function removeAccents (str) {
    if (!str) return null

    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
  }

  return (
    <div>
      <div>
        <button onClick={jugar}>JUGAR</button>
      </div>
      <div>
        <button>Salir</button>
      </div>
      <div>
        <div>
          <label>tiempo de juego: {tiempo}</label> <br></br>
          <label>{nivel === 7 ? 'GANASTEEEEE' : ''}</label>
        </div>
        <div
          style={{
            margin: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {mainArray.map((row, index) => (
            <div>
              {' '}
              <Container1 letrasData={row} nivel={nivel} contain={index + 1} />
            </div>
          ))}
          <Teclado
            correctas={letrasCorrectas}
            incorrectas={letrasIncorrectas}
            revisa={revisar}
          />
        </div>
      </div>
    </div>
  )
}
