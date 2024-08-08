import { useDispatch, useSelector } from 'react-redux'
import styles from './login.module.scss'
import { useEffect, useState } from 'react';
import login, { checkLogin, getLogin } from '../../store/login';
import Admin from '../../layout/admin';

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {loginUser,loginCheck} = useSelector(state => state.login)
  const dispatch = useDispatch()
 

  if (loginCheck == true) return <Admin/>
  function Sign() {
    dispatch(checkLogin({name:username,pass:password}))
    setPassword('')
    setUsername('')
    
  }
  useEffect(() => {
    dispatch(getLogin())
    console.log(loginUser,loginCheck);
  }, [username])
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
            autoComplete='new-password'
          />

        </div>

        <button className={styles.login__button} onClick={Sign}>Sign in</button>
      </div>


    </div>
  )
}

export default Login