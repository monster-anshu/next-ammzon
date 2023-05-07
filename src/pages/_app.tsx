import { Provider } from 'react-redux'
import { SessionProvider} from 'next-auth/react'
import { store } from '../state/store/store'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
