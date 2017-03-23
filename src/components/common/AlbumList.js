import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

class AlbumList extends Component {

	state = {albums:[]}
	
	componentWillMount() {
		console.log('componentWillMount');
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({albums: response.data}));
	}

	renderAlbums() {
		return this.state.albums.map(album => <AlbumDetail album={album} key={album.title}/>);
	}

	render() {
		console.log(this.state);
		return (
			<ScrollView style={{elevation:2}}>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export { AlbumList };