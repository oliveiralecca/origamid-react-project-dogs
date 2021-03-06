import React from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'
import PropTypes from 'prop-types'

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null)
  const [pages, setPages] = React.useState([1])
  const [infinite, setInfinite] = React.useState(true)

  React.useEffect(() => {
    let wait = false

    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY
        const height = document.body.offsetHeight - window.innerHeight
        if (scroll > height * .75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]) // callback para pegar os itens que já têm no array
          wait = true
          setTimeout(() => {
            wait = false
          }, 500) // seta wait pra false depois de 500ms (para que a função não seja ativada diversas vezes seguidas)
        } // se o scroll for maior que 75% da altura da página
      }      
    }

    window.addEventListener('wheel', infiniteScroll) // evento da rodinha (scroll) do mouse
    window.addEventListener('scroll', infiniteScroll) // scroll da própria barrinha da página
    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  }, [infinite])

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      {pages.map(page => <FeedPhotos key={page} user={user} page={page} setModalPhoto={setModalPhoto} setInfinite={setInfinite} />)}
    </div>
  )
}

Feed.defaultProps = {
  user: 0 // valor padrão do user
}

Feed.propTypes = {
  user: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]) // o user pode ser um número (id) ou string (username)
}

export default Feed

