function delaySayHello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Delay Hello🔥')
    }, 2000)
  })
}

async function retry(promiseCallback, maxTries = 1) {
  console.log(maxTries)
  try {
    return await promiseCallback()
  } catch (err) {
    if (maxTries > 0) {
      return retry(promiseCallback, maxTries - 1)
    }
    throw err
  }
}

async function main() {
  try {
    let b = await retry(delaySayHello, 2)
    console.log('✅ answer:', b)
  } catch (err) {
    console.log('❌', err)
  }
}

main()
