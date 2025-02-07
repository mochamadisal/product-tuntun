import { forwardRef, useMemo } from 'react'

import styles from '@/styles/components/button.module.scss'
import weightModule from '@/styles/variables/font-weight.module.scss'
import type { ButtonProps } from './types'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      label,
      prefix,
      variant,
      weight,
      id,
      size,
      isFullWidth,
      ...otherProps
    },
    ref
  ) => {
    const fontWeight = useMemo(() => {
      return weight || 'regular'
    }, [weight])

    return (
      <button
        ref={ref}
        className={`${styles.styledButton} ${styles[`size-${size}`]} ${
          styles[`variant-${variant}`]
        } ${isFullWidth ? styles.isFullWidth : ''}`}
        {...otherProps}
        id={id}
      >
        {prefix && children}
        {label && (
          <span style={{ fontWeight: weightModule[fontWeight] }}>{label}</span>
        )}
        {!prefix && children}
      </button>
    )
  }
)

Button.defaultProps = {
  size: 'medium',
  type: 'button',
  variant: 'primary',
  weight: 'semibold',
}

export default Button
