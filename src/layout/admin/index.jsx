import { useSelector } from 'react-redux'
import Login from '../../page/login'
import styles from './admin.module.scss'

function Admin() {
  const {loginCheck} =useSelector(state => state.login)


  if (loginCheck == false) return <Login/>
  return (
    <div className={styles.admin}>
      hello
    </div>
  )
}

export default Admin