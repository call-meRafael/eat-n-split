
import { Friend } from "../components/Friends.jsx";

export const FriendList = ( {friends} ) => {
  // No FriendList.js
  return (
    <ul className="friends-list">
      {friends.map((friend) => (
        <li key={friend.id} className="friend-item">
          <Friend friend={friend} />
        </li>
      ))}
    </ul>
  );
};
