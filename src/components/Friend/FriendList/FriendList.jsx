import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <div>
      <ul class="friend-list">
        <FriendListItem friends={friends} />
      </ul>
      {/* avatar, name, isOnline, id */}
      {/*         avatar={friends.avatar}
        name={friends.name}
        isOnline={friends.isOnline}
        id={friends.id} */}
    </div>
  );
}
