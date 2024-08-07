import { useDispatch, useSelector } from 'react-redux'
import styles from './login.module.scss'
import { useEffect, useState } from 'react';
import { getLogin } from '../../store/login';

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { loginUser } = useSelector(state => state.login)
  const dispatch = useDispatch()
  console.log(loginUser, username, password);
  useEffect(() => {
    dispatch(getLogin())
  }, [])
  return (
    <div className={styles.login}>
      <div className={styles.login__content}>
        <h4 className={styles.login__title}>Admin Login</h4>
        <div className={styles.login__input}>
          <p className={styles.login__text}>Username</p>
          <input type="text"
            className={styles.login__username}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.login__input}>
          <p className={styles.login__text}>Password</p>

          <input type='password'
            className={styles.login__password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>

        <button className={styles.login__button}>Sign in</button>
      </div>


    </div>
  )
}

export default Login