const Search = ({handleSearch ,search }) => {
    return ( 

        <div className="container mt-5">
        <input className="search" type="text" placeholder="Search your emoji"
        value={search}
        onChange={handleSearch} />
        </div>

     );
}
 
export default Search;


