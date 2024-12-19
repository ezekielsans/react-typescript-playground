import React, { useState, ChangeEvent, SyntheticEvent, FormEvent } from "react";

interface Props {
  onClick: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({onClick,search,handleChange}: Props): JSX.Element => {
  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)} />
      <button onClick={(e) => onClick(e)}>Click me!</button>
    </div>
  );
};

export default Search;
