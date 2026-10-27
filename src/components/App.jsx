/* import user from './Profile/user.json';
import Profile from './Profile/Profile';
import Board from './Board/Board';
import ProfileList from './ProfileList/ProfileList';
import users1 from './ProfileList/users.json';
import CardTranslator from './CardTranslator/CardTranslator';
import verbs from './CardTranslator/card.json'; */
import data from './Statistics/data.json';

import Statistics from './Statistics/Statistics';

export const App = () => {
  return (
    <div>
      <Statistics title="Upload stats" stats={data} />
      {/*       <div className="cardList">
        {verbs.map(item => (
          <CardTranslator
            key={item.id}
            verb={item.verb}
            translation={item.translation}
            sentence={item.sentence}
            sentenceTranslation={item.sentenceTranslation}
          />
        ))}
      </div> */}
      {/*  <ProfileList users2={users1} /> */}
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
