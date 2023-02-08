import React, { useContext } from 'react'
import UserContext from 'contexts/user'

import cat from 'public/avatars/cat.png'
import Avatar from 'components/_atoms/Avatar'
import classNames from 'classnames'

import styles from './index.module.scss'
import EditProfile from './EditProfile'

export default function ProfilePage() {
  const { userData }: object | any = useContext(UserContext)
  const { _id, username, email, createdAt } = userData || {}

  return (
    <div
      className={classNames({
        [styles.profile]: true,
      })}
    >
      <Avatar src={cat?.src} size={80} />
      <br />
      <span>
        Username: <b>{username}</b>
      </span>
      <br />
      <span>
        Email: <b>{email}</b>
      </span>
      <br />
      <span>
        Member since: <b>{createdAt}</b>
      </span>

      <EditProfile username={username} id={_id} />
    </div>
  )
}
