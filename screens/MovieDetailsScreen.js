import React from 'react'
import { StyleSheet, Text, ScrollView, Image, Dimensions } from 'react-native';

export default class MovieDetailsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title')
  })

  state = {}

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=18ce5660&i="+this.props.navigation.getParam('imdbID'))
    .then(response => response.json())
    .then(data => this.setState({ ...data })
    )
  }

  render() {
    const dimensions = Dimensions.get('window')
    const imageHeight = Math.round(dimensions.width * 4 / 3)
    const imageWidth = dimensions.width
    return(
        <ScrollView>
          <Image 
            source={{ uri: this.state.Poster, width: imageWidth, height: imageHeight }} />
          <Text style={styles.detailsTitle}>{this.state.Title}</Text>
          <Text style={styles.details}>Year: {this.state.Year}</Text>
          <Text style={styles.details}>Rated: {this.state.Rated}</Text>
          <Text style={styles.details}>Released: {this.state.Released}</Text>
          <Text style={styles.details}>Runtime: {this.state.Runtime}</Text>
          <Text style={styles.details}>Genre: {this.state.Genre}</Text>
          <Text style={styles.details}>Director: {this.state.Director}</Text>
          <Text style={styles.details}>Writer: {this.state.Writer}</Text>
          <Text style={styles.details}>Plot: {this.state.Plot}</Text>
          <Text style={styles.details}>Language: {this.state.Language}</Text>
          <Text style={styles.details}>Country: {this.state.Country}</Text>
          <Text style={styles.details}>Awards: {this.state.Awards}</Text>
          <Text style={styles.details}>Metascore: {this.state.Metascore}</Text>
          <Text style={styles.details}>imdbVotes: {this.state.imdbVotes}</Text>
          <Text style={styles.details}>imdbID: {this.state.imdbID}</Text>
          <Text style={styles.details}>Type: {this.state.Type}</Text>
          <Text style={styles.details}>DVD: {this.state.DVD}</Text>
          <Text style={styles.details}>Website: {this.state.Website}</Text>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  detailsTitle: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  details: {
    paddingLeft: 10,
    paddingRight:10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 15
  },
});