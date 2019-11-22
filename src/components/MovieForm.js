import React, { useState } from 'react';
import PropTypes from 'prop-types';

function MovieForm(props){
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const handleTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleSubtitle = (event) => {
        setSubtitle(event.target.value);
    };

    const handleDescription = (event) => {
        setDescription(event.target.value);
    };

    const handleUrl = (event) => {
        setUrl(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(title, subtitle, url, description);

        const emptyTitle = (title === '');
        const emptySubtitle = (subtitle === '');
        const emptyDescription = (description === '');
        const emptyUrl = (url === '');

        emptyTitle ? document.getElementById('titleEmpty').innerHTML = 'Title is empty.' : document.getElementById('titleEmpty').innerHTML = '';
        emptySubtitle ? document.getElementById('subtitleEmpty').innerHTML = 'Subitle is empty.' : document.getElementById('subtitleEmpty').innerHTML = '';
        emptyDescription ? document.getElementById('descriptionEmpty').innerHTML = 'Description is empty.' : document.getElementById('descriptionEmpty').innerHTML = '';
        emptyUrl ? document.getElementById('urlEmpty').innerHTML = 'Url is empty.' : document.getElementById('urlEmpty').innerHTML = '';

        if (!emptyTitle && !emptySubtitle && !emptyUrl && !emptyDescription){
            setTitle('');
            setSubtitle('');
            setDescription('');
            setUrl('');
            document.getElementById('titleEmpty').innerHTML = '';
            document.getElementById('subtitleEmpty').innerHTML = '';
            document.getElementById('descriptionEmpty').innerHTML = '';
            document.getElementById('urlEmpty').innerHTML = '';

            let counter = (localStorage.getItem('counter') == null) ? 0 : Number(localStorage.getItem('counter')) + 1;
            localStorage.removeItem('counter');
            localStorage.setItem('counter', counter);
            props.addMovie({id:counter, title, subtitle, description, imageUrl:url, year:0, rating:0});/*
            if (localStorage.getItem('movies') != null){
                let movies = JSON.parse(localStorage.getItem('movies'));
                movies.push({id:counter, title, subtitle, description, imageUrl:url, year:0, rating:0});
                localStorage.removeItem('movies');
                localStorage.setItem('movies', JSON.stringify(movies));
                localStorage.removeItem('counter');
                localStorage.setItem('counter', counter);
                props.addMovie({id:counter, title, subtitle, description, imageUrl:url, year:0, rating:0});
            } else {
                localStorage.setItem('counter', counter);
                localStorage.setItem('movies', JSON.stringify([{id:counter, title, subtitle, description, imageUrl:url, year:0, rating:0}]));
                props.addMovie({id:counter, title, subtitle, description, imageUrl:url, year:0, rating:0});
            }*/
        }
    };

    MovieForm.propTypes = {
        addMovie:PropTypes.func
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input  type="text" name="title" value={title} onChange={handleTitle} />
            <label id="titleEmpty"></label>
            <label>Subitle:</label>
            <input  type="text" name="subtitle" value={subtitle} onChange={handleSubtitle}/>
            <label id="subtitleEmpty"></label>
            <label>Description:</label>
            <input  type="text" name="description" value={description} onChange={handleDescription}/>
            <label id="descriptionEmpty"></label>
            <label>Photo Url:</label>
            <input  type="text" name="photourl" value={url} onChange={handleUrl}/>
            <input type="submit" value="submit"/>
            <label id="urlEmpty"></label>
        </form>
    );
}

export default MovieForm;