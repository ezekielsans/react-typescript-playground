import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {


    const apiKey = import.meta.env.VITE_API_KEY;
    //console.log("apiKey: ",apiKey);

    const {data} = await axios.get<SearchResponse>(
     
      `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${apiKey}`
     
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
