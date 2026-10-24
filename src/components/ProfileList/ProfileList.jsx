import React from 'react';
import css from './ProfileList.module.css';
import Profile from './Profile';

export default function ProfileList({ users2 }) {
  return (
    <div className={css.profileList}>
      {users2.map(({ username, tag, location, avatar, stats }) => (
        <>
          <Profile
            key={tag}
            name={username}
            location={location}
            avatar={avatar}
            stats={stats}
          />
        </>
      ))}
    </div>
  );
}
