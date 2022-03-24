import React from 'react'
import { IoMdSnow } from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'

const style = {
  topBar: `bg-[#303339] p-2 rounded-t-lg border-[#151c22] border`,
  topBarContent: `flex items-center`,
  likesCounter: `flex-1 flex items-center justify-end`,
}

const likes = Math.floor(Math.random() * 100) + 1

const NFTImage = ({ selectedNft }) => {
  return (
    <div className="text-white">
      <div className={style.topBar}>
        <div className={style.topBarContent}>
          <IoMdSnow />
          <div className={style.likesCounter}>
            <AiOutlineHeart />
            {likes}
          </div>
        </div>
      </div>
      <div>
        <img src={selectedNft?.image} />
      </div>
    </div>
  )
}

export default NFTImage
