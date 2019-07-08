import React from 'react'
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import Row from "../components/Row"

class SearchListScreen extends React.Component {

  static navigationOptions = {
    headerTitle: 'Movies'
  }

  state = {
    query: "",
    searchResults: [],
    totalResults: ""
  }

  handleSearch = (query) => {
    if (query.length > 2) {
      this.searchResPgNum = 1
      this.setState({ query })
      fetch("http://www.omdbapi.com/?apikey=18ce5660&s="+query)
      .then(response => response.json())
      .then(data => {this.setState({
          totalResults: data.totalResults,
          searchResults: data.Search
          })
        })
    } else {
        this.setState({
          totalResults: 0,
          searchResults: []
      })
    }
  }
      
  handleLoadMore = () => {
    this.searchResPgNum++
    fetch("http://www.omdbapi.com/?apikey=18ce5660&s="+this.state.query+"&page="+this.searchResPgNum)
    .then(response => response.json())
    .then(data => {
      data.Response === "True" && this.setState(prevState => ( {
          searchResults: prevState.searchResults.concat(data.Search)
        }))
      })
  }
    
  onPress = (imdbID, Title) => {
    this.props.navigation.navigate('MovieDetails', {
      imdbID: imdbID,
      title: Title
    })
  }
    
  renderItem = ({item}) => <Row {...item} onPress={this.onPress} />
  
  render() {
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.query}
          placeholder="Search..."
          onChangeText={this.handleSearch} 
        />
        {this.state.totalResults ? 
          <Text style={styles.total}>Total movies found: {this.state.totalResults}</Text> : null }
        {this.state.searchResults && (
          <FlatList
            data={this.state.searchResults}
            keyExtractor={(item, index) => item.imdbID}
            renderItem={this.renderItem}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={1}
          />
        )}
      </View>
        )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  total: {
    fontWeight: "bold",
    color: "grey",
    textAlign: "center"
  },
  query: {
    fontSize: 20,
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    margin: 15
  },
});
  
export default SearchListScreen