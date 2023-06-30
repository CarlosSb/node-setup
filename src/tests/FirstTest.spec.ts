import { User } from '../models/User'

test('it should le ok', () => {
  const user = new User()

  user.name = 'John'

  expect(user.name).toEqual('John')
})
