import Card from "../Card/Card";

interface Props {}

const CardList = (props: Props) => {
  return (
    <div>
      <Card companyName="AAPL" 
            ticker="AAPL"
            price={12312}/>
      <Card companyName="MCRSFT" 
            ticker="MSFT"
            price={12312}/>
      <Card companyName="TESLA" 
            ticker="TSLA"
            price={12312}/>
    </div>
  );
};

export default CardList;
