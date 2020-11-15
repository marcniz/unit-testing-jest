const { test, expect } = require('@jest/globals')
const subtract = require('./subtract')

test('properly subtract two numbers', () => {
    expect(subtract(5,2)).toBe(3)
})