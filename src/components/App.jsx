import user from './Profile/user.json';
import Profile from './Profile/Profile';
import Board from './Board/Board';
import ProfileList from './ProfileList/ProfileList';
import users from './ProfileList/users.json';

export const App = () => {
  return (
    <div>
      <ProfileList users={users} />
      {/*  <Board /> */}
      {/*      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> */}
    </div>
  );
};
