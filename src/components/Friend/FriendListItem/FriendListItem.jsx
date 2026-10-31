import React from 'react';
import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

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

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
