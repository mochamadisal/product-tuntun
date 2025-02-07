import inputStyles from '@/styles/components/input.module.scss'
import { InputProps } from './types'

const Input = ({ onChange, value, placeholder }: InputProps) => {
  return (
    <input
      type="text"
      className={inputStyles.styledInput}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Input
