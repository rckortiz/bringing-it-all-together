const main = async () => {
  getImage()
  getLaunchData()
}

const imgAPI = 'https://sdg-astro-api.herokuapp.com/api/Nasa/apod'
const launchesAPI =
  'https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming'

const getImage = async () => {
  const response = await fetch(imgAPI)
  const data = await response.json()
  document.querySelector('.header-image').style.backgroundImage = `'url(${
    data.hdUrl
  })'`
  console.log(data.hdUrl)
}

const getLaunchData = async () => {
  const response = await fetch(launchesAPI)
  const data = await response.json()
  console.log(data)
}

document.addEventListener('DOMContentLoaded', main)
