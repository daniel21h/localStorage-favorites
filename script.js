let favorites = []

// Pegar imagem externa
async function getExternalImage() {
  const response = await fetch('https://source.unsplash.com/random')

  document.querySelector('.image')
  .innerHTML = `<img src='${response.url}' />`
}

getExternalImage()

document.querySelector('button')
  .onclick = function() {
    getExternalImage()
  }


  