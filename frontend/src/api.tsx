import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {


    const apiKey = import.meta.env.REACT__APP_API_KEY;
    console.log("apiKey: ",apiKey);

    const {data} = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=QnkmpfdZsHVzIWVWqqbNIxIrn0jjhxNT`
      //`https://financialmodelingprep.com/api/v3/cik-search/Berkshire?apikey=${process.env.REACT_APP_API_KEY}`
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Error message: ", error.message);
      return error.message;
    } else {
      console.log("Unexpected Error: ", error);
      return "An Unexpected error occurred";
    }
  }
};
