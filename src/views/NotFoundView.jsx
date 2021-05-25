import React from 'react'
import { Redirect } from 'react-router'

const NotFoundView = () => (
    // <div>
    //     <h1>Página no Encontrada.</h1>
    // </div>
    <Redirect path="/" />//Si la página no se encuentra o está rota te redirecciona, en este caso, a Home.
)

export default NotFoundView;