function randomSide(array) {
  let randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

export { randomSide }