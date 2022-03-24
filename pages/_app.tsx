import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks' 

/*Chain ID 80001 is the Polygon Mumbai Testnet
'injected' connector is web3 method used by metamask */

const supportedChainIds = [80001]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThirdwebWeb3Provider
     supportedChainIds={supportedChainIds}
     connectors={connectors}
     >
      <Component {...pageProps} />
  </ThirdwebWeb3Provider>
  )
  
}

export default MyApp
