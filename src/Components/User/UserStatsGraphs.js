import React from 'react'
import styles from './UserStatsGraphs.module.css'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([])
  const [acessos, setAcessos] = React.useState(0)

  React.useEffect(() => {
    const graphData = data.map(item => {
      return {x: item.title, y: Number(item.acessos)}
    })

    setAcessos(data.map(({ acessos }) => Number(acessos)).reduce((a,b) => a+b))
    setGraph(graphData)
  }, [data])

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.acessos} ${styles.graphItem}`}>
        <p>Acessos: {acessos}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie data={graph} innerRadius={50} padding={{top: 20, bottom: 20, left: 80, right: 80}} style={{
            data: {fillOpacity: .9, stroke: '#fff', strokeWidth: 2}, 
            labels: {fontSize: 14, fill: '#333'}
        }} />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar data={graph} alignment="start"></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  )
}

export default UserStatsGraphs