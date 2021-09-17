import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

const UserHeader = () => {
  const [title, setTitle] = React.useState('')
  const location = useLocation() // para saber em qual página/rota eu estou e mudar o título

  React.useEffect(() => {
    const { pathname } = location // lembrar: desestructuring de "location.pathname"
    switch (pathname) {
      case '/conta/estatisticas':
        setTitle('Estatísticas')
        break
      case '/conta/postar':
        setTitle('Poste Sua Foto')
        break
      default:
        setTitle('Minha Conta')
        break
    }
  }, [location])

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader
