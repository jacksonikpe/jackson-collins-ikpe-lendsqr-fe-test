import "./usersPageCard.style.scss";

interface userCardProp {
  data: {
    id: number;
    img: React.ReactElement;
    name: string;
    amount: string;
  };
}
const UsersPageCard = ({ data }: userCardProp) => {
  return (
    <div className="user-card">
      <div className="card-image">{data.img}</div>
      <div className="card-details">
        <h3>{data.name}</h3>
        <p>{data.amount}</p>
      </div>
    </div>
  );
};

export default UsersPageCard;
//users page card
