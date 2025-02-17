import { Route, Routes } from 'react-router-dom'

import { Layout } from 'app/layout'
import { AuthPage } from 'pages/auth'
import { configRouter } from 'shared/configs/router'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={configRouter.auth.path} element={<AuthPage />} />
      </Route>
    </Routes>
  )
}
