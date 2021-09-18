import React from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import { PHOTOS_GET } from '../../Api'
import styles from './FeedPhotos.module.css'

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch()

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 }) // user = 0 ele pega de qualquer usuário
      const { response, json } = await request(url, options)
    }
    fetchPhotos()
  }, [request])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} />)}     
    </ul>
  )
  else return null
}

export default FeedPhotos
