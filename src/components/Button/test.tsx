import { screen } from '@testing-library/react'

import Button from '.'

import { renderWithTheme } from 'utils/tests/helpers'

describe('<Button />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Button>Buy now</Button>)
    expect(screen.getByRole('button')).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
