import Card from "../Card/Card";

interface Props {}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <Card companyName="Apple" ticker="AAPL" price={12312} />
      <Card companyName="Microsoft" ticker="MSFT" price={12312} />
      <Card companyName="Tesla" ticker="TSLA" price={12312} />
    </div>
  );
};

export default CardList;
