import Arrow from "../assets/icon-arrow.svg";

interface Props {
  setSearch: (search: string) => void;
}

const Search = ({ setSearch }: Props) => {
  const searchData = async (event: any) => {
    event.preventDefault();
    setSearch(event.target.search.value);
  };
  return (
    <form onSubmit={searchData} className="relative">
      <input
        id="search"
        type="text"
        className="w-full rounded-[15px] h-[58px]"
      />
      <div className="bg-black w-[58px] aspect-square rounded-r-[15px] absolute right-0 top-0 flex justify-center items-center">
        <img src={Arrow} alt="Arrow Icon" />
      </div>
    </form>
  );
};

export default Search;
