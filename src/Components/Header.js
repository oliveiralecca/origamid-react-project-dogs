import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ReactComponent as Dogs } from '../Assets/dogs.svg'

const Header = () => {
  return (
    <header className={styles.header}> {/* estilo específico, dinâmico */}
      <nav className={`${styles.nav} container`}> {/* estilo global, estático (container) */}
        <Link className={styles.logo} to="/" aria-label="Dogs - Home"> {/* aria-label é como o alt da tag <img>, ajuda na acessibilidade */}
          <Dogs />
        </Link>
        <Link className={styles.login} to="/login">Login / Criar</Link>
      </nav>
    </header>
  )
}

export default Header

