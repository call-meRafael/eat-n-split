import { AddBtn } from "./addBtn.jsx";

export const Friend = ({ friend }) => {
  return (
    <div className="friend-card">
      <div className="friend-info">
        <img src={friend.avatar} alt={friend.name} className="friends-pic" />
        <h3>
          {friend.name} <span>{friend.lastName}</span>
        </h3>
      </div>

      {/* O botão "Selecionar" também entra aqui no alinhamento */}
      <AddBtn />
    </div>
  );
};
