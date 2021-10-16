import React from 'react'
import Head from '../Helper/Head'
import useFetch from '../../Hooks/useFetch'
import { STATS_GET } from '../../Api'
import Loading from '../Helper/Loading'
import Error from '../Helper/Error'
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs')) // parar carregar a lib de gráficos só na página de estatíticas, e não em todo o site, o que pesaria desnecessariamente

const UserStats = () => {
  const { data, loading, error, request } = useFetch()

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET()
      await request(url, options)
    }
    getData()
  }, [request])

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data)
  return (
    <React.Suspense fallback={<div></div>}>
      <Head title="Estatísticas" />
      <UserStatsGraphs data={data} />
    </React.Suspense>
  )
  else return null
}

export default UserStats

