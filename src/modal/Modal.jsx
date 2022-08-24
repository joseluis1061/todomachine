import { createPortal } from 'react-dom';
import '../styles/Modal.css';
const Modal = ({children}) => {
  return createPortal(
    <div className="modalBackground">
      {children} 
    </div>,
    document.getElementById('modal')
  )
}
export default Modal;