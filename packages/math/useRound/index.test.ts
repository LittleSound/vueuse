import { useRound } from '.'

describe('useRound', () => {
  test('should be defined', () => {
    expect(useRound).toBeDefined()
  })

  test('this should work', () => {
    const decimal = 0.1
    const value = useRound(decimal)
    expect(value).toBe(0)
    decimal = 0.5
    expect(value).toBe(1)
  })
})
