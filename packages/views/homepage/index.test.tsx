import { render, screen } from '@testing-library/react'
import Homepage from './index'
import LayoutWrapper from '@/components/layout/wrapper'

jest.mock('next/navigation', () => ({
  __esModule: true,
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}))

describe('Homepage Test', () => {
  test('render list of products', async () => {
    render(
      <LayoutWrapper>
        <Homepage />
      </LayoutWrapper>
    )

    const bodyList = await screen.findAllByTestId(/product-card-/i)

    expect(bodyList.length).toBe(6)
  })
})
