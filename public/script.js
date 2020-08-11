const colorContainer = document.getElementById('colorcontainer')

const getColorNumber = async (color) => {
  const response = await fetch(`/api/${color}`)
  const data = await response.json()
  return data.colorCount
}

colorContainer.addEventListener('click',async (clickEvent) => {
  if(clickEvent.target.matches('.box')) {
    const clickedBox = clickEvent.target
    clickedBox.classList.toggle('showing')
    if ([...clickedBox.classList].includes('showing')) {
      const colorNumber = await getColorNumber(clickedBox.id)
      clickedBox.innerHTML = colorNumber
    } else {clickedBox.innerHTML = ''}
  }
})
