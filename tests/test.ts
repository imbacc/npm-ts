import { describe, it } from 'mocha'
import { expect } from 'chai'

import AB, { CD } from '../libs/index'

describe('测试组', () => {
  it('测试testA', () => {
    const result = AB.testA
    expect(result).to.be.eq('aa')
  })

  it('测试testB', () => {
    const result = AB.testB
    expect(result).to.be.eq('bb')
  })

  it('测试testC', () => {
    const result = CD.testC
    expect(result).to.be.eq('bb')
  })

  it('测试testD', () => {
    const result = CD.testD
    expect(result).to.be.eq('bb')
  })
})
