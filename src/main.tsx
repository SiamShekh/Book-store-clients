import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './components/routes/MainRoutes.tsx'
import "react-image-gallery/styles/css/image-gallery.css";
import { Provider } from 'react-redux'
import ReduxStore from './redux/store/ReduxStore.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
      <RouterProvider router={MainRoutes} />
    </Provider>
  </React.StrictMode>,
)
