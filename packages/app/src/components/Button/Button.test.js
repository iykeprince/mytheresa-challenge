/** @jest-environment jsdom */
import React from 'react'
import Button from "./index";
import { render } from "@testing-library/react";

const title = "Hello Button"

it('Should find button with testid MytButton', () => {
  const { getByTestId } = render(<Button title={title} />)

  expect(getByTestId('MytButton')).toBeDefined()
})

it('Should render the given title', () => {
  const { getByTestId } = render(<Button title={title} />)

  expect(getByTestId('MytButton').textContent).toContain(title)
})

it('Should be disabled when set', () => {
  const { getByTestId } = render(<Button title={title} disabled={true} />)

  expect(getByTestId('MytButton').className).toContain('myt-button__container__disabled')
})


