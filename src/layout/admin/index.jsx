import Login from '../../page/login'
import styles from './admin.module.scss'

function Admin() {
  return (
    <div className={styles.admin}>
      <Login/>
    </div>
  )
}

export default Admin