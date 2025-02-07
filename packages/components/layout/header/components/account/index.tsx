import Button from '@/components/button'
import fontModule from '@/styles/variables/font.module.scss'
import { FiUser } from 'react-icons/fi'

const Account = () => {
  return (
    <div>
      <Button variant="icon">
        <FiUser style={{ fontSize: fontModule.h5 }} />
      </Button>
    </div>
  )
}

export default Account
