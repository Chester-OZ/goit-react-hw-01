import css from './FriendListItem.module.css'
import clsx from 'clsx'

function FriendListItem({ avatar, name, isOnline }) {
  const networkStatus = clsx(isOnline ? css.online : css.offline)
  return (
    <div className={css.friendsListItem}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={networkStatus}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  )
}

export default FriendListItem
