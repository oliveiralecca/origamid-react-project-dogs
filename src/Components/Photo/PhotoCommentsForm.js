import React from 'react'
import { COMMENT_POST } from '../../Api'
import {ReactComponent as Enviar} from '../../Assets/enviar.svg'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'

const PhotoCommentsForm = ({ id, setComments}) => {
  const [comment, setComment] = React.useState('')
  const { request, error } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()
    const { url, options } = COMMENT_POST(id, {comment})
    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('')
      setComments((comments) => [...comments, json])
    } // comments do callback são os comentários anteriores ao postado no submit atual
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={comment} onChange={({ target }) => setComment(target.value)} name="comment" id="comment" placeholder="Comente..." />
      <button>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  )
}

export default PhotoCommentsForm
