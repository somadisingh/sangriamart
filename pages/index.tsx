import type { NextPage } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { useWeb3 } from '@3rdweb/hooks' 
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#000000] opacity-90`,
  button: `border border-[#282b2f] bg-[#B33030] p-[0.8rem] text-3xl font-semibold rounded-3xl cursor-pointer text-black`,
  text: `text-[white]`,
}

const Home: NextPage = () => {
  const {address, connectWallet} = useWeb3()

  useEffect(() => { /*address of user who logs in is stored in sanity DB */
     if (!address) return
     ;(async () => {
       const userDoc = {
         _type: 'users',
         _id: address,
         userName: 'Unnamed',
         walletAddress: address,
       }
       const result = await client.createIfNotExists(userDoc)
     })() /*IIFE*/

     }, [address])
  
  return ( 
    <div className={style.wrapper}>
      {address ? (
      <>
      <Header/>
      <Hero />
    </>
      ) : (
        <div className={style.walletConnectWrapper}>
        <button 
            className={style.button} 
            onClick={() => connectWallet('injected')}
            >
          <div className={style.text}>Please Connect Your Metamask Wallet</div>
        </button>
        
        </div>
      )}
    </div>
    
    
  )
}

export default Home
