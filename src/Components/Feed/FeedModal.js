import React from 'react'
import styles from './FeedModal.module.css'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_GET } from '../../Api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import PhotoContent from '../Photo/PhotoContent'

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch()

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null)
  } // "event.target" = o local clicado em si como a tag de <img>, por exemplo, e "event.currentTarget" = todo o modal que encapsula a img, os textos, etc

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}      
    </div>
  )
}

export default FeedModal
