import './App.scss';
import SearchContainer from './components/SearchContainer'

function App() {

	const handleSearch = async(e) =>{
		e.preventDefault();
		try{
			console.log(e.target.value);
			const mangaSearch = await fetch(`https://api.jikan.moe/v3/search/manga?q=${e.target.value}&page=1`)
			const mangaSearchResult = await mangaSearch.json();

			const id = mangaSearchResult.results[0].mal_id;
			const name = mangaSearchResult.results[0].title;
			const img = mangaSearchResult.results[0].image_url;

			const recommendationsPromise = await fetch(`https://api.jikan.moe/v3/manga/${id}/recommendations`);
			const recommendationsResult = await recommendationsPromise.json();
			console.log(recommendationsResult);
		}catch(err){
			console.log(err);
		}

	}

  return (
    <div className="App">
			<SearchContainer onSearched={handleSearch}/>
    </div>
  );
}

export default App;
