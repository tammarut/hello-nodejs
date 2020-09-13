export const getScore = (score) => {
  if (score >= 50) {
    return 'A'
  } else {
    return 'F'
  }
}
export const fetchSomeData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('OK'), 1000)
  })
}

export const login = async () => {
  const res = await fetchSomeData()
  return res === 'OK'
}

export const video = {
  play() {
    return true
  }
}
