export const GoGet = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data
    })
}

export const urlAll = () => {
  return `https://rickandmortyapi.com/api/character`
}

export const urlOne = id => {
  return `https://rickandmortyapi.com/api/character/${id}`
}
