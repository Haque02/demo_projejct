import { render, screen } from '@testing-library/react'
import Page from '../page'

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Page />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('contains expected text', () => {
    render(<Page />)
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument()
  })
})