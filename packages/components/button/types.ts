import type { ReactNode } from 'react'

export type ButtonVariant =
  | 'primary'
  | 'primaryOutline'
  | 'text'
  | 'icon'
  | 'tertiary'

export interface ButtonProps {
  id?: string
  'data-testid'?: string
  label?: string
  type?: 'button' | 'submit'
  size?: 'small' | 'medium'
  variant?: ButtonVariant
  children?: ReactNode
  onClick?: () => void
  isFullWidth?: boolean
  disabled?: boolean
  prefix?: boolean
  weight?: 'semibold' | 'bold' | 'regular'
}
