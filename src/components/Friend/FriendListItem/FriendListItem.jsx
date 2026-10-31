import React from 'react';

export default function FriendListItem({ friends }) {
  return (
    <div>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li class="item" key={id}>
          <span class="status"></span>
          <img class="avatar" src={avatar} alt="User avatar" width="48" />
          <p class="name">{name}</p>
        </li>
      ))}
    </div>
  );
}
