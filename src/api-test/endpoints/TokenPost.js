import React from 'react'

/* Para autenticar um usuário */

const TokenPost = () => {
  const[username, setUsername] = React.useState('')
  const[password, setPassword] = React.useState('')
  const[token, setToken] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }), // transforma meu objeto na string que é necessária para o corpo
    }).then(response => {
      console.log(response)
      return response.json()
    }).then(json => {
      console.log(json)
      setToken(json.token)
      return json
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="username" value={username} onChange={({ target }) => setUsername(target.value)} />
      <input type="password" placeholder="password" value={password} onChange={({ target }) => setPassword(target.value)} />
      <button>Enviar</button>
      <p style={{wordBreak: 'break-all'}}>{token}</p>
    </form>
  )
}

export default TokenPost

