interface Props {
  setSearch: (search: object[]) => void;
}

const Search = ({ setSearch }: Props) => {
  const searchData = async (event: any) => {
    event.preventDefault();
    setSearch(event.target.search.value);
  };
  return (
    <form onSubmit={searchData}>
      <input id="search" type="text" />
    </form>
  );
};

export default Search;
