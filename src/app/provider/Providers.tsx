import { FC, PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
