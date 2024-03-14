import React from "react";
import { useForm } from "react-hook-form";

function SearchBar({ onSearch }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    onSearch(data.query);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search-bar">
      <input
        type="text"
        placeholder="Search for recipes..."
        {...register("query")}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
