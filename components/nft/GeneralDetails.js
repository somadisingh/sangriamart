import { AiFillHeart } from 'react-icons/ai'
import { MdRefresh } from 'react-icons/md'
import { RiShareBoxLine } from 'react-icons/ri'
import { FiMoreVertical } from 'react-icons/fi'
import { GiShare } from 'react-icons/gi'

const style = {
  wrapper: `flex text-white`,
  infoContainer: `h-36 flex flex-col flex-1 justify-between mb-6`,
  accent: `text-[#2081e2]`,
  nftTitle: `text-3xl font-extrabold text-white`,
  otherInfo: `flex`,
  ownedBy: `text-[#8a939b] mr-4`,
  likes: `flex items-center text-[#8a939b]`,
  likeIcon: `mr-1`,
  actioButtonsContainer: `w-44`,
  actioButtons: `flex container justify-between text-[1.4rem] border-2 rounded-lg`,
  actioButton: `my-2`,
  divider: `border-r-2`,
}

const likes = Math.floor(Math.random() * 100) + 1

const GeneralDetails = ({ selectedNft }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.infoContainer}>
        <div className={style.accent}>Bored Ape Yacht Club</div>
        <div className={style.nftTitle}>{selectedNft?.name}</div>
        <div className={style.otherInfo}>
          <div className={style.ownedBy}>
            Owned by <span className={style.accent}>kz49cell</span>
          </div>
          <div className={style.likes}>
            <AiFillHeart className={style.likeIcon} /> {likes} favorites
          </div>
        </div>
      </div>
      <div className={style.actioButtonsContainer}>
        <div className={style.actioButtons}>
          <div className={`${style.actioButton} ml-2`}>
            <MdRefresh />
          </div>
          <div className={style.divider} />
          <div className={style.actioButton}>
            <RiShareBoxLine />
          </div>
          <div className={style.divider} />
          <div className={style.actioButton}>
            <GiShare />
          </div>
          <div className={style.divider} />
          <div className={`${style.actioButton} mr-2`}>
            <FiMoreVertical />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralDetails
