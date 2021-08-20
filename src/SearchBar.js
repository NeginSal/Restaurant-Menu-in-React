import {useState} from 'react';

const SearchBar = (props) => {
   const [price, updatePrice] = useState("")

   const updateR = (e) => updatePrice({
     r: props.onSearch(e.target.value),
     d: ((props.value) / 1000)
   })

   const updateD = (e) => updatePrice({
     r: ((props.value ) * 1000 ),
     d: props.onSearch(e.target.value)
   })

    return (
      <div>
        <div className="box1">
           <p>IRR </p>
           <input type = "text" value = {price.r}
            onChange = {updateR} className="input"/>
        </div>
        <div className="box2">
           <p>$ </p>
           <input type = "text" value = {price.d}
            onChange = {updateD} className="input"/>
         </div>
      </div>
     );
}

export default SearchBar;