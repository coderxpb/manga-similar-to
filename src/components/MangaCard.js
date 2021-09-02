import styled from "styled-components";

const MangaImg = styled.img`
	width: 200px;
	height: 300px;
`;

const MangaTitle = styled.div`
	width: 200px;
	background: orange;
`;

const MangaCard = (props) =>{
	return(
		<div className="manga-card">
			<MangaImg className="manga-image" src={props.manImg}/>
			<MangaTitle>
				<p className="manga-name">{props.manTitle}</p>
			</MangaTitle>
		</div>
	)
}

export default MangaCard;