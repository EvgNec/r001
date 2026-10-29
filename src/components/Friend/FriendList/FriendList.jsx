import React from 'react';

export default function FriendList({ friends }) {
  return (
    <div>
      <ul class="friend-list">
        <li class="item" key={friends.id}>
          <span class="status"></span>
          <img class="avatar" src="" alt="User avatar" width="48" />
          <p class="name"></p>
        </li>
      </ul>
      {/* avatar, name, isOnline, id */}
      {/*         avatar={friends.avatar}
        name={friends.name}
        isOnline={friends.isOnline}
        id={friends.id} */}
    </div>
  );
}
