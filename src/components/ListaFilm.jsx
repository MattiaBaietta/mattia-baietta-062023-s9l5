import { Card, Col, Row } from "react-bootstrap";
import React from "react";

import Mymodal from "./Mymodal";

let fetchfilm = ["http://www.omdbapi.com/?apikey=7dcf0c13&&s=harry%20potter", "http://www.omdbapi.com/?apikey=7dcf0c13&s=marvel", "http://www.omdbapi.com/?apikey=7dcf0c13&s=hunger_games"];

class ListaFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            arrayFilm: [],
            selectedFilm: null,
            cercafilm: "",
            clicksearch: false,
            tempfilm:""
        };
    }

    Fetchlistafilm = async () => {
        try {
            const films = fetchfilm.map(url => fetch(url));
            const response = await Promise.all(films);
            const dataPromises = response.map(response => response.json());
            const arrayFetchs = await Promise.all(dataPromises);
            const checkFetchs = response.every(response => response.ok);

            if (checkFetchs) {
                this.setState({
                    arrayFilm: arrayFetchs,
                    isLoading: false,
                });
            } else {
                console.log("errore nel fetch film");
                this.setState({
                    isLoading: false,
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount() {
        this.Fetchlistafilm();
    }
    leggiTextbox = (event) => {
        this.setState({ tempfilm: event.target.value });
       
    };
    handleFilmClick = (imdbID) => {
        this.setState(prevState => ({
            selectedFilm: prevState.selectedFilm === imdbID ? null : imdbID,
        }));
    }
    handleClickSearch = () => {
        this.setState({ clicksearch: true });
        this.setState({cercafilm:this.state.tempfilm})
    }
    render() {

        return (
            <>
                <div>
                    <input onChange={this.leggiTextbox} type="text" name="" id="" />
                    <input onClick={this.handleClickSearch} type="button" value="Cerca Film" />
                </div>

                {this.state.arrayFilm.map(rigafilm => (

                    <Row key={rigafilm.totalResults}>
                        {rigafilm.Search.slice(0, 5).map(film => {
                            if (this.state.clicksearch === true) {
                                if(film.Title.toLowerCase().includes(this.state.cercafilm.toLowerCase())){
                                    return(
                                <Col onClick={() => this.handleFilmClick(film.imdbID)} key={film.imdbID}>
                                    <Card>
                                        <Card.Img variant="top" src={film.Poster} />
                                        <Card.Body>
                                            <Card.Title>{film.Title}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>)}
                                
                            }
                            else{
                                return(
                                <Col onClick={() => this.handleFilmClick(film.imdbID)} key={film.imdbID}>
                                    <Card>
                                        <Card.Img variant="top" src={film.Poster} />
                                        <Card.Body>
                                            <Card.Title>{film.Title}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                )
                            }
                            
                        })}
                        
                    </Row>
                ))}
                
                {this.state.selectedFilm && <Mymodal imdbID={this.state.selectedFilm} title={this.state.Title}/>}
            </>
        );
    }
}

export default ListaFilm;
