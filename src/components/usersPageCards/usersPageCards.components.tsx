import UsersPageCard from "../usersPageCard/usersPageCard.component";
import { userCardData } from "../../utils/data/userCard";
import "./usersPageCards.style.scss";

const UsersPageCards = () => {
  return (
    <div className="userPageCards">
      {userCardData.map((data) => {
        return <UsersPageCard key={data.id} data={data} />;
      })}
    </div>
  );
};

export default UsersPageCards;
////users page card
