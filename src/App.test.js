import { render, screen } from '@testing-library/react';
import App from './App';


test("renders search container", () =>{
	const {getByText, getByRole} = render(<App />);

	getByText("Manga similar to");
	getByRole('button', {name: 'manga-search'});
})