export type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='my-8'>
      <div className='flex items-center'>
        <input
          type='text'
          id='search'
          placeholder='Search Dream Car....'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='px-6 py-3 sm:w-96 text-lg border border-white  focus:outline-none focus:ring-2 focus:ring-primary transition-all ease-in-out text-white bg-transparent rounded-3xl'
        />
      </div>
    </div>
  );
};

export default SearchBar;
