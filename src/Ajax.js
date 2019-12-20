export const GoGet = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data
    })
}

export function urlAll() {
  return `https://rickandmortyapi.com/api/character`
}

export function urlOne(id) {
  return `https://rickandmortyapi.com/api/character/${id}`
}
