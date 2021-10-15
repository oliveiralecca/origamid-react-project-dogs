import React from 'react'

// componente para modificar o título da aba do navegador

const Head = (props) => {

  React.useEffect(() => {
    document.title = props.title + ' | Dogs'
    document.querySelector('meta[name=description').setAttribute('content', props.description || '') // se não for passada uma descrição, um string vazia é passada
  }, [props])

  return <></>
}

export default Head
