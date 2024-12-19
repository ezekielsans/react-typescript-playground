import Search from "./components/Search/Search";
import "./App.css";
import CardList from "./components/CardList/CardList";
import React, { useState, ChangeEvent, SyntheticEvent } from "react";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onClick = async (e: SyntheticEvent) => {
    const result = await searchCompanies(search);
    console.log(result);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };

  return (
    <>
      <div className="App">
        <Search onClick={onClick} search={search} handleChange={handleChange} />
        <CardList />
      </div>
    </>
  );
}

export default App;
