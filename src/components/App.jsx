import user from './Profile/user.json';
import Profile from './Profile/Profile';
import Board from './Board/Board';
import ProfileList from './ProfileList/ProfileList';
import users1 from './ProfileList/users.json';
import CardTranslator from './CardTranslator/CardTranslator';
import verbs from './CardTranslator/card.json';
import data from './Statistics/data.json';
import FriendList from './Friend/FriendList/FriendList';
import friends from './friends.json';
import Accordion from './Accordion/Accordion';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';
import Statistics from './Statistics/Statistics';

export const App = () => {
  return (
    <div>
      <Accordion title="Історія транзакцій">
        <TransactionHistory items={transactions} />
      </Accordion>
      <Accordion title="Список друзів">
        <FriendList friends={friends} />
      </Accordion>
      <Accordion title="Секція статистики">
        <Statistics title="Upload stats" stats={data} />
      </Accordion>
      <Accordion title="Профіль соціальної мережі">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Accordion>
      <Accordion title="Профілi соціальної мережі">
        <ProfileList users2={users1} />
      </Accordion>
      <Accordion title="Список друзів">
        <Board />
      </Accordion>
      <Accordion title="Словник">
        <div className="cardList">
          {verbs.map(item => (
            <CardTranslator
              key={item.id}
              verb={item.verb}
              translation={item.translation}
              sentence={item.sentence}
              sentenceTranslation={item.sentenceTranslation}
            />
          ))}
        </div>
      </Accordion>
    </div>
  );
};
