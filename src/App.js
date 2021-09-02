import React,{useState} from 'react';

import './App.scss';
import SearchContainer from './components/SearchContainer';
import MangaCard from './components/MangaCard';

function App() {
	const [recMangas, setRecMangas] = useState([]);

	const recToComps = (data) => {
		setRecMangas([]);
		console.log(data);
		data.map(m => {
			const tempData = {img: m.image_url,name: m.title};
			console.log(tempData);
			setRecMangas(oldRec=>[...oldRec,tempData]);
		})
		console.log(`recced ${recMangas}`);
	}

	const handleSearch = async(e) =>{
		e.preventDefault();
		try{
			console.log(e.target.value);
			const mangaSearch = await fetch(`https://api.jikan.moe/v3/search/manga?q=${e.target.value}&page=1`)
			const mangaSearchResult = await mangaSearch.json();

			const id = mangaSearchResult.results[0].mal_id;
			const name = mangaSearchResult.results[0].title;
			const img = mangaSearchResult.results[0].image_url;

			//const tempData = {id,name,img};
			//recToComps(tempData);

			const recommendationsPromise = await fetch(`https://api.jikan.moe/v3/manga/${id}/recommendations`);
			const recommendationsResult = await recommendationsPromise.json();
			recToComps(recommendationsResult.recommendations);
			console.log(recommendationsResult);
		}catch(err){
			console.log(err);
		}
	}

  return (
    <div className="App">
			<SearchContainer onSearched={handleSearch}/>
			<div className="recommendations-container">
				{recMangas.map(function(item,i){
					return <MangaCard manImg={item.img} manTitle={item.name}/>
				})}
			</div>
    </div>
  );
}

export default App;
