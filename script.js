function toggleMode() {
  const html = document.documentElement

  // pegar a tag img
  const img = document.querySelector("#profile img")
  const alt = document.querySelector("#profile img alt")

  // substituir a imagem

  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar.png")
    alt = setAttribute("alt", "avatar light")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-light.png")
    alt = setAttribute("alt", "avatar")
  }

  html.classList.toggle("light")
}
