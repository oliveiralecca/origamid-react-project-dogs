import React from 'react'

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null)

  React.useEffect(() => {
    function changeMatch() {
      const {  matches } = window.matchMedia(media) // retorna booleano
      setMatch(matches)
    }
    changeMatch() // a função vai ser acionada primeiramente mesmo sem dar um resize na tela, para pegar o tamanho inicial antes do resize
    window.addEventListener('resize', changeMatch) // a função para saber se o tamanho da tela corresponde ao valor passado é ativada sempre que houver um resize na tela (window)
    return () => {
      window.removeEventListener('resize', changeMatch)
    }
  }, [media])

  return match
}

export default useMedia
