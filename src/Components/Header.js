import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ReactComponent as Dogs } from '../Assets/dogs.svg'
import { UserContext } from '../UserContext'

const Header = () => {
  const { data } = React.useContext(UserContext)

  return (
    <header className={styles.header}> {/* estilo específico, dinâmico */}
      <nav className={`${styles.nav} container`}> {/* estilo global, estático (container) */}
        <Link className={styles.logo} to="/" aria-label="Dogs - Home"> {/* aria-label é como o alt da tag <img>, ajuda na acessibilidade */}
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link> 
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}               
      </nav>
    </header>
  )
}

export default Header

