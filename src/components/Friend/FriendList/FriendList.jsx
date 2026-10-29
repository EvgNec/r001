import React from 'react';

export default function FriendList({ friends }) {
  return (
    <div>
      <ul class="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li class="item" key={id}>
            <span class="status"></span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
          </li>
        ))}
      </ul>
      {/* avatar, name, isOnline, id */}
      {/*         avatar={friends.avatar}
        name={friends.name}
        isOnline={friends.isOnline}
        id={friends.id} */}
    </div>
  );
}
