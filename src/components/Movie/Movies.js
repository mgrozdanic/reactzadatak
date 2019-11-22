import React, { Component } from 'react';
import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import MovieForm from '../MovieForm';

export default class Movies extends Component {

    constructor() {
        super();

        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ movies: MovieService.getMovies()}));
        //let moviesFromFile = MovieService.getMovies();
        //localStorage.removeItem('movies');
        //localStorage.setItem('movies', JSON.stringify(moviesFromFile));
        //this.setState(() => ({movies: moviesFromFile}));
    }

    addMovie(movie) {
        this.setState(() => ({
            movies: [...this.state.movies, movie]
        }));
        console.log(this.state.movies);
        console.log(movie);
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <MovieForm addMovie={movie => this.addMovie(movie)} />
                        <MovieList movies={this.state.movies} />
                    </div>
                </div>
            </div>
        );
    }
}