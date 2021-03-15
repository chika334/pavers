import React, { useState } from "react";
import Transactions from "./Transactions";
import Filter from "./Filter";

const Index = () => {
  const [dataState, setDataState] = useState("");

  const handleChange = (e) => {
    setDataState(e.target.value);
  };
  return (
    <div>
      <div className="mt-5 d-flex align-content-center justify-content-center">
        <label className="pr-3">Select option: </label>
        <select onClick={(e) => handleChange(e)}>
          <option>Select Option</option>
          <option value="allTransactionPagination">All Transactions</option>
          <option value="filterByDate">daniel</option>
          <option value="chika">daniel</option>
        </select>
      </div>
      {dataState === "allTransactionPagination" || dataState === "" ? (
        <Transactions />
      ) : (
        console.log("bad")
      )}
      {dataState === "filterByDate" ? <Filter /> : console.log("Fine")}
    </div>
  );
};

export default Index;
