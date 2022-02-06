import words from './words'

export const getWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length)
  return words[randomIndex].toLowerCase()
}
