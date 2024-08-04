import css from './Profile.module.css'

function Profile({
  image,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  const stats = [
    { interactions: 'Followers', value: followers },
    { interactions: 'Views', value: views },
    { interactions: 'Likes', value: likes },
  ]

  return (
    <div className={css.userCard}>
      <div className={css.user}>
        <img className={css.image} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      {/* <ul className={css.userStats}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.statsValue}>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.statsValue}>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.statsValue}>{likes}</span>
        </li>
      </ul> */}

      <ul className={css.userStats}>
        {stats.map(({ interactions, value }) => {
          return (
            <li className={css.item} key={interactions}>
              <span>{interactions}</span>
              <span className={css.statsValue}>{value}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Profile
