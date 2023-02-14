import React from 'react'
import {Link} from 'react-router-dom'

import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={styles['error-page']}>
      <h1 className='heading'>Error</h1>
      <p className={styles['error-message']}>Go back to <Link className={styles['error-link']} to='/'>Home</Link></p>
    </div>
  )
}

export default ErrorPage