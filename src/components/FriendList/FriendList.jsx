import css from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem'

function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li className={css.friendsItem} key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        )
      })}
    </ul>
  )
}

export default FriendList
