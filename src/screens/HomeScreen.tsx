import Header from '../components/Header';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {GET, api, baseImageURL} from '../helper/apiConstants';
import {makeAPIRequest} from '../helper/globalFunctions';
import {useSelector} from 'react-redux';
import {getData} from '../storage/storage';

const HomeScreen = () => {
  const {theme} = useSelector((state: any) => state.theme);

  const [data, setData] = useState<any>();
  const [name, setName] = useState<string | null | undefined>('');
  const [page, setPage] = useState(1);
  const [isFooterLoading, setIsFooterLoading] = useState(false);
  const [limit, setLimit] = useState(0);
  const navigation: any = useNavigation();

  const getName = async () => {
    const name = await getData('user-name');
    setName(name);
  };

  const fetchData = () => {
    const options = {
      method: GET,
      url: api.endPoints.person,
      params: {
        language: 'en-US',
        page: page,
        limit: 5,
      },
    };
    makeAPIRequest(options)
      .then((res: any) => {
        if (page == 1) {
          setData(res.data.results);
        } else {
          setData([...data, ...res.data.results]);
        }
        setPage(page + 1);
        setLimit(res.data.total_pages);
        setIsFooterLoading(false);
      })
      .catch(e => {
        Alert.alert('Something Went Wrong...!');
      });
  };

  useEffect(() => {
    fetchData();
    getName();
  }, []);

  const handleLoadMore = () => {
    setIsFooterLoading(true);
    if (limit >= page) {
      setPage(page + 1);
      fetchData();
    } else {
      setIsFooterLoading(false);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: theme?.bgColor}}>
      <Header
        title={name}
        left={true}
        onLeftPress={() => Alert.alert('logout')}
        isSwitch={true}
      />
      <FlatList
        data={data}
        style={{marginTop: 20}}
        renderItem={({item, index}) => {
          return (
            <View style={{marginHorizontal: 10, marginVertical: 20}}>
              <View style={styles.dataMainView}>
                <Image
                  source={{
                    uri: baseImageURL + item.profile_path,
                  }}
                  style={[
                    styles.profileImage,
                    {borderWidth: index % 2 == 0 ? 2 : 0},
                  ]}
                  resizeMode="contain"
                />
                <View
                  style={[
                    styles.nameView,
                    {borderWidth: index % 2 == 0 ? 2 : 0},
                  ]}>
                  <Text style={{color: 'white'}}>{item.name}</Text>
                  <Text style={{color: 'white'}}>
                    [{item.popularity} - Popularity]
                  </Text>
                </View>
              </View>
              <FlatList
                data={item.known_for}
                style={{marginHorizontal: 10, marginBottom: 3}}
                horizontal
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      style={{marginHorizontal: 3}}
                      onPress={() => {
                        navigation?.navigate('DetailsScreen', {
                          selectedItem: item,
                          title: name,
                        });
                      }}>
                      <Image
                        source={{
                          uri: baseImageURL + item.poster_path,
                        }}
                        style={{height: 100, width: 80}}
                      />
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          );
        }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isFooterLoading ? <ActivityIndicator size="large" /> : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  dataMainView: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: 'white',
  },
  nameView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'grey',
    marginHorizontal: 10,
    marginLeft: 10,
    flexDirection: 'row',
    borderColor: 'white',

    borderRadius: 10,
    paddingHorizontal: 5,
    height: 40,
  },
});
export default HomeScreen;
