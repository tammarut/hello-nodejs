import { getFirstAlbumTitle } from './index'
// 1. Import the module you want to mock into your test file.
// 2. jest.mock() the module.
// 3. Use .mockResolvedValue(<mocked response>) to mock the response.</mocked>)
import axios from 'axios'

jest.mock('axios')

it('returns the title of the first album', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: 'My First Album'
      },
      {
        userId: 1,
        id: 2,
        title: 'Album: The Sequel'
      }
    ]
  })

  const title = await getFirstAlbumTitle() // Run the funtion
  expect(title).toEqual('My First Album') // Make an assertion on the result
})
