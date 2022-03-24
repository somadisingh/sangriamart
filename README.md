# SangriaMart

# A decentralized NFT Marketplace built on Polygon

Sangriamart is NFT marketplace built on L2 scaling solution for Ethereum; Polygon. It uses MATIC tokens to buy and sell NFTs.

## Before Using the App, a few prerequisites:
1. Install Metamask from: https://metamask.io/
2. Add the Mumbai Polygon testnet to your metamask networks from: https://chainlist.org/ 
3. After adding the testnet get atleast 5 MATIC tokens from: https://faucet.polygon.technology/
4. Now go to the app: https://sangriamart.vercel.app/ and connect your wallet containing the MATIC tokens

## Known Bugs:

1. Slow loading and fetching times from thirdweb v2
2. MetaMask - RPC Error: Internal JSON-RPC error
3. code: -32603 data: code: -32000 message: "execution reverted"
4. Uncaught (in promise) {code: -32603, message: 'Internal JSON-RPC error.'
5. err: insufficient funds for gas * price + value: address 0x6438B8bE43381B4CdB474c1A907111508FA6fE80 have 294000 want 4000000000000000000 (supplied gas 275010499)
6. ![image](https://user-images.githubusercontent.com/78269625/159857887-70cc4cf4-d9bc-48f3-9233-ec0eb4bff40c.png)
7. ![image](https://user-images.githubusercontent.com/78269625/159857469-c8a6bc72-d0bf-4e37-a109-84db4a325218.png)


## Technologies Used:

1. Nextjs and Tailwind CSS for the Frontend Application
2. Polygon L2 scaling solution for ethereum
3. @3rdweb for Web3 connectivity
4. Sanity.io for storing the user databased data
5. Thirdweb for creating the smart contracts of NFT collection & the marketplace
6. Typescript for project setup files
7. Vercel for hosting the application: https://sangriamart.vercel.app/
