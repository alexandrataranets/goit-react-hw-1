import Profile from '../Profile/Profile.jsx';
import userData from '../../userData.json';
import FriendList from '../FriendList/FriendList.jsx';
import friends from '../../friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx';
import transactions from '../../transactions.json';

export default function App () {
    return (
      <>
        <Profile user={userData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </>
    );
  }