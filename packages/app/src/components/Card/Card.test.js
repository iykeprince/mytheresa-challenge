import React from 'react'
import Card from './index'
import { render } from '@testing-library/react'

test('should render card', () => {
  const { getByTestId } = render(<Card />)

  expect(getByTestId('MytCard')).toBeDefined()
})

test('snapshot of the card', () => {
  const { asFragment } = render(<Card />)

  expect(asFragment()).toMatchSnapshot()
})

test('should render test prop passed to it', () => { })