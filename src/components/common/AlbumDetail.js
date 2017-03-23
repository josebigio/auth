import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = (props) =>{
	console.log(props);
	const { artist, title, image, thumbnail_image, url } = props.album; 
	return 	(
		<Card>

			<CardSection>
				<View style={styles.thumbnailContainerStyle}>
					<Image source={{uri:thumbnail_image}} style={styles.thumbnailStyle}/>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.titleStyle}>{artist}</Text>
					<Text>{title}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image source={{uri:image}} style={styles.imageArtStyle}/>
			</CardSection>

			<CardSection>
				<Button onPress={()=>{Linking.openURL(url)}}>
					Buy
				</Button>
			</CardSection>
			
		</Card>
		);
};

const styles = {
	thumbnailStyle:{
		width:50,
		height:50,
	},
	titleStyle: {
	    fontSize: 20,
	    fontWeight: 'bold',
  	},
	imageArtStyle:{
		width:null,
		height:300,
		flex:1
	},
	textContainer:{
		flexDirection:'column',
		justifyContent:'space-around'
	},
	thumbnailContainerStyle: {
		marginLeft:10,
		marginRight:10,
		justifyContent:'center'
	},imageContainerStyle: {
		marginLeft:10,
		marginRight:10,
		justifyContent:'center',
		flexDirection: 'column'
	}
}

export { AlbumDetail };