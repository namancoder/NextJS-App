import React from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCar";
import Header from "./components/Header";

const SearchPage = () => {
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <RestaurantCard />
      </div>
    </>
  );
};
export default SearchPage;
