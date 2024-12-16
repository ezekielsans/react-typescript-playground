interface Props {
  companyName: string;
  ticker: string;
  price: number;
}
import "./Card.css";
const Card = ({ companyName, ticker, price }: Props) => {
  return (
    <div className="Card">
      <img src="../../assets/dummy.png" alt="apple pic" />
      <h1>{companyName}</h1>
      <h3>{ticker}</h3>
      <h3>{price}</h3>
      
    </div>
  );
};

export default Card;
