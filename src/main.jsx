import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Produto from './routes/Produto.jsx'
import Login from './routes/Login.jsx'

/* instale o pacote npm install react-router-dom e chame as seguintes propriedades*/
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

{/*CRIANDO A FUNÇÃO CREATEBROWSERROUTER */}
const router = createBrowserRouter([
  {
  /*CHAMANDO O ELEMENTO PAI*/
  path:'/', element: <App/>,
  errorElement:<Error/>,
  /*CHAMANDO OS ELEMENTOS FILHOS */

  children:[
    /* ROTA DA PAGINA HOME*/
    {path:'/home',element:<Home/>},
    /*ROTA DA PAGINHA PRODUTO */
    {path:'/Produto', element:<Produto/>},
    {path:'/Login', element:<Login/>}
   
  ]

  }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/*CRIANDO  O PROPS QUE SERÁ RENDERIZADA */}
    <RouterProvider  router ={router}/>
  </React.StrictMode>,
)
