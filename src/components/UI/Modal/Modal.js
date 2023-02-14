import React from 'react'
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles['modal']}>
          <div onClick={() => props.onCloseModal(false)} className={styles['backdrop']}></div>
          <div className={styles['popup']}>
            {props.children}
          </div>
        </div>,
        document.getElementById('modal'))}
    </>
  )
}

export default Modal