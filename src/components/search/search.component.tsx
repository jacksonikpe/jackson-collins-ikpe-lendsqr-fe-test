import { ReactComponent as SearchIcon } from "../../assets/img/search-icon.svg";
import "./search.style.scss";
const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Search for anything" />
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
//search component
