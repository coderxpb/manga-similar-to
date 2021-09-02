import { getByLabelText, getByPlaceholderText, render, screen } from '@testing-library/react';
import App from './App';


test("renders search container", () =>{
	const { getByText, getByPlaceholderText} = render(<App />);

	getByText("Manga similar to");
	getByPlaceholderText("enter manga name here");
})