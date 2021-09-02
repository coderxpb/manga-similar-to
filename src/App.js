import logo from './logo.svg';
import './App.scss';
import SearchContainer from './components/SearchContainer'

function App() {

	const handleSearch = (e) =>{
		e.preventDefault();
		console.log(e.target.value);
	}

  return (
    <div className="App">
			<SearchContainer onSearched={handleSearch}/>
    </div>
  );
}

export default App;
