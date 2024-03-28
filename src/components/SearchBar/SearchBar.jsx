import toast, { Toaster } from "react-hot-toast";

const SearchBar = () => {
  const notify = () => toast("Please, enter what you want to find. 🤔");
  return (
    <header>
      <form>
        <input
          type="text"
          //   autocomplete="off"
          //   autofocus
          placeholder="Search images and photos"
        />
        <button onClick={notify} type="submit">
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
