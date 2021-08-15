import { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  let products =[
    { id: "1", name: "Burger", price: 100000 },
    { id: "2", name: "Cheeseburger", price: 200000 },
    { id: "3", name: "Chicken", price: 320000 },
    { id: "4", name: "RoastBeef", price: 450000 },
    { id: "5", name: "MacAndCheese", price: 120000 },
    { id: "6", name: "Taco", price: 520000 },
    { id: "7", name: "ButterBurger", price: 670000 },
    { id: "8", name: "PepperoniPizza", price: 400000 }
  ];
  const handleChange = (e) =>{
    e.preventDefault();
    setInput(e.target.value);
  };

  if (input.length > 0) {
    products = products.filter((id) => {
      return id.name.toLowerCase().match(input);
    });
  }

  return (
    <div className="productlist">
      <input type="text" placeholder="Search name here"
       onChange={handleChange} value={input} className="inputField"/>
      {products.map((product,id) => {
        return(
          <div className="food" key={id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        )
      }
      )}
    </div>
   );
}

export default Home;