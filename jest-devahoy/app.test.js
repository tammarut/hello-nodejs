import * as app from './app'

// it(message, fn)
test('should get A', () => {
  // ✅Assertion
  expect(app.getScore(50)).toEqual('A')
  expect(app.getScore(100)).toEqual('A')
})

// it(message, fn)
test('should get F', () => {
  // ✅Assertion
  expect(app.getScore(10)).toEqual('F')
  expect(app.getScore(30)).toEqual('F')
})

test('should works with async', async () => {
  const res = await app.fetchSomeData()

  expect(res).toEqual('OK')
})

describe('Mock function', () => {
  test('should works with jest.fn()', () => {
    let myMock = app.fetchSomeData()
    myMock = jest.fn()

    expect(myMock()).toEqual(undefined)
  })

  test('should works with mockReturnValue', () => {
    const myMock = jest.fn()

    myMock.mockReturnValue('foo')

    expect(myMock()).toEqual('foo')
  })

  test('should login', async () => {
    const isLoggedIn = await app.login()

    expect(isLoggedIn).toBe(true)
  })

  test('shyOn and custom response', async () => {
    const spy = jest.spyOn(app, 'fetchSomeData').mockResolvedValue('fail')
    const isLoggedIn = await app.login()

    expect(isLoggedIn).toBe(true)
    expect(spy).toHaveBeenCalled()

    app.fetchSomeData.mockRestore()
  })

  test('plays video', () => {
    const spy = spyOn(app.video, 'play')
    const isPlaying = app.video.play()

    expect(isPlaying).toBe(true)
    expect(spy).toHaveBeenCalled()
  })
})
