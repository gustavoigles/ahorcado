import data from './words.json'

const WORD_SIZE = 6
const MIN_WORD_LENGTH = 4
const MAX_WORD_LENGTH = 5

//get random words. w represent word, l letter.
export async function getRandomWords () {
  //randomize array.
  shuffle(data)
  let words = []

  //get first word.
  const mainWord = data.find(w => w.length === WORD_SIZE)
  words.push(mainWord);

  //Split the first string word into an array and run this for each letter
  [...mainWord].forEach(letter => {
    //find the 5 other words
    let word = data.find(
      w =>
        w.includes(letter) &&
        w.length >= MIN_WORD_LENGTH &&
        w.length <= MAX_WORD_LENGTH &&
        !words.includes(w)
    )

    words.push(word)
  })

  return words
}

function shuffle (array) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }

  return array
}
