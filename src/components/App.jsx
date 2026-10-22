import user from '../user.json';
import Profile from './Profile/Profile';
import Board from './Board/Board';

export const App = () => {
  return (
    <div>
      <Board />
      {/*       <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> */}
    </div>
  );
};
