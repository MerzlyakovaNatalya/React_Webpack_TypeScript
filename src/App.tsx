import React from 'react'
import './styles.css'

const Users = React.lazy(() => import('MicroFrontendApp/UsersComponent'))

export const App = () => {
  return (
    <>
      <h1>Сайт в разработке!!!</h1>
      <Users/>
    </>
  )
}
