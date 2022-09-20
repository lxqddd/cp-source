import {it, describe, expect} from 'vitest'
import { sum } from '../index'

describe('first', () => { 
  it('should be work', () => {
    expect(sum(1, 1)).toEqual(2)
  })
 })