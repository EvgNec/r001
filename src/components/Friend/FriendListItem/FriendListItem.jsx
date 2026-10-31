import React from 'react';
import css from './FriendListItem.module.css';

export default function FriendListItem({ friend }) {
  const { avatar, name, isOnline } = friend;

  return (
    <li className={css.item}>
      <span
        className={`${css.status} ${isOnline ? css.online : css.offline}`}
      ></span>

      <img className={css.avatar} src={avatar} alt={name} width="90" />

      <p className={css.name}>{name}</p>
    </li>
  );
}
