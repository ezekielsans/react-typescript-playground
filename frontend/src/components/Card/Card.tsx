interface Props {
  companyName: string;
  ticker: string;
  price: number;
}
import "./Card.css";
const Card: React.FC<Props> = ({
  companyName,
  ticker,
  price,
}: Props): JSX.Element => {
  return (
    <div className="Card">
      <img src="../../assets/dummy.png" alt="apple pic" />
      <h1>
        {companyName} ({ticker})
      </h1>
      <p>{price}</p>
    </div>
  );
};

export default Card;
