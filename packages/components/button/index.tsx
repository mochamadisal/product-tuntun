/* eslint-disable react/display-name */
import { forwardRef, useMemo } from 'react';
import styles from '@/styles/components/button.module.scss';
import weightModule from '@/styles/variables/font-weight.module.scss';
import type { ButtonProps } from './types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      label,
      prefix,
      variant = 'primary',     // Default value for variant
      weight = 'semibold',     // Default value for weight
      id,
      size = 'medium',         // Default value for size
      type = 'button',         // Default value for type
      isFullWidth = false,     // Default value for isFullWidth
      ...otherProps
    },
    ref
  ) => {
    const fontWeight = useMemo(() => weight || 'regular', [weight]);

    return (
      <button
        ref={ref}
        type={type}
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
    );
  }
);

export default Button;
