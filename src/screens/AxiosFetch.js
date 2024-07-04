import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Linking,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

const AxiosFetch = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e8e6a588e2114d8493e1a2914db69630',
        );
        console.log('API Response:', response.data);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchArticles();
  }, []);

  const handlePressArticle = url => {
    Linking.openURL(url);
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  const renderImage = urlToImage => {
    if (urlToImage) {
      return (
        <Image
          source={{uri: urlToImage}}
          style={styles.image}
          resizeMode="cover"
        />
      );
    } else {
      return (
        <View style={[styles.image, styles.noImageContainer]}>
          <Text style={styles.noImageText}>Image Not Available</Text>
        </View>
      );
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handlePressArticle(item.url)}
            style={styles.articleContainer}>
            {renderImage(item.urlToImage)}
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 12,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  articleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  noImageContainer: {
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noImageText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555',
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
  },
});

export default AxiosFetch;
