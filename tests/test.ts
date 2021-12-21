import xx from '../libs/index'

test('测试A', () => {
  const result = xx.testA
  expect(result).toBe('aa')
})

test('测试B', () => {
  const result = xx.testB
  expect(result).toBe('bb')
})
