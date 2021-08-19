import CurrencyRow from './CurrencyRow'

const SearchBar = (props) => {
    return (
        <div>
           <input
             type="text" onChange={(e) => props.onSearch(e.target.value)}
             value={props.value} className="inputField"
           />
           <CurrencyRow/>
           <div className="equals">=</div>
           <CurrencyRow/>
        </div>
     );
}

export default SearchBar;