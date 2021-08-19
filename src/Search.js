import React, { useState } from "react";
import SearchBar from "./SearchBar";

const Home = () => {
    const [searchValue, setSearchValue] = useState("");
    const products = [
        { id: "1", name: "Burger", price: "100000" },
        { id: "2", name: "Cheeseburger", price: "200000" },
        { id: "3", name: "Chicken", price: "320000" },
        { id: "4", name: "RoastBeef", price: "450000" },
        { id: "5", name: "MacAndCheese", price: "120000" },
        { id: "6", name: "Taco", price: "520000" },
        { id: "7", name: "ButterBurger", price: "670000" },
        { id: "8", name: "PepperoniPizza", price: "400000" }
      ];

      const filterNames = ({ price,name }) => {
        return price.indexOf(searchValue) !== -1 ||
               name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
      };
    return (
        <div className="productlist">
           <SearchBar onSearch={setSearchValue} value={searchValue} />
             {products.filter(filterNames).map((product) => {
               return(
                 <div className="food" key={product.id}>
                   <h2>{product.name}</h2>
                   <p>{product.price}</p>
                 </div>
               )
             })}
        </div>
     );
}

export default Home;