import React from 'react'
import { Alert } from 'react-bootstrap'
import '../toast.css'
import { ToastContainer, toast } from 'react-toastify'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'

Message.propTypes = {}

function Message({ variant, children }) {
  toast.error(
    <div>
      <ErrorOutlineIcon className='pr-1' fontSize='large' /> {children}
    </div>,
    {
      position: 'top-right',
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  )

  return (
    <ToastContainer></ToastContainer>
  )
}

Message.defaultProps = {
  variant: 'info',
}

export default Message
