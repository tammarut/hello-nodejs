async function fetchUsers() {
  throw new Error('Fetch users wrong')
}

async function main() {
  // ⭐️ Promise.all
  const p1 = Promise.resolve('foo_p1');
  const p2 = new Promise((resolve, _reject) => {
    setTimeout(resolve, 500, 'foo_p2');
  });
  const p3 = 3;
  const p4 = Promise.reject('❌Wow Error')

  try {
    const valuesAll = await Promise.all([p1, p2, p3, p4])
    console.log(valuesAll)
  } catch (error) {
    console.error(error)
  }


  // ⭐️ Promise.allSettled
  const ps1 = Promise.resolve('foo_p1');
  const ps2 = new Promise((resolve, _reject) => {
    setTimeout(resolve, 500, 'foo_p2');
  });
  const ps3 = 3;
  const ps4 = Promise.reject('❌Wow Error')
  const ps5 = fetchUsers()

  function assertSuccessful(value) {
    return value.status === 'fulfilled'
  }

  function assertFailed(value) {
    return value.status === 'rejected'
  }

  const values = await Promise.allSettled([ps1, ps2, ps3, ps4, ps5])
  const successfulValues = values.filter(assertSuccessful).map(value => value.value)
  const failedValues = values.filter(assertFailed).map(value => value.reason)
  console.log(successfulValues)
  console.log(failedValues)
  console.log('Go go')
  /* [
    { status: 'fulfilled', value: 1 },
    { status: 'rejected', reason: 'Error foo' },
    { status: 'fulfilled', value: 3 },
    { status: 'rejected', reason: 'Wow error' },
] */
}

main()
