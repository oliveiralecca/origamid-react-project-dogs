import React from 'react'

/* Para um usuário autenticado postar fotos - aqui será utilizado o token */

const PhotoPost = () => {
  const[token, setToken] = React.useState('')
  const[nome, setNome] = React.useState('')
  const[peso, setPeso] = React.useState('')
  const[idade, setIdade] = React.useState('')
  const[img, setImg] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData() // cria um objeto do tipo de dado de formulário
    formData.append('img', img) // chave, valor reativo
    formData.append('nome', nome) 
    formData.append('peso', peso) 
    formData.append('idade', idade) 

    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData // por ter envio de imagem, o body agora não poderá ser em texto, é em formData
    }).then(response => {
      console.log(response)
      return response.json()
    }).then(json => {
      console.log(json)
      return json
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="token" value={token} onChange={({ target }) => setToken(target.value)} />
      <input type="text" placeholder="nome" value={nome} onChange={({ target }) => setNome(target.value)} />
      <input type="text" placeholder="peso" value={peso} onChange={({ target }) => setPeso(target.value)} />
      <input type="text" placeholder="idade" value={idade} onChange={({ target }) => setIdade(target.value)} />
      <input type="file" onChange={({ target }) => setImg(target.files[0])} />
      <button>Enviar</button>
    </form>
  )
}

export default PhotoPost

