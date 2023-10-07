import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Alert,
} from 'react-native';
import Header from '../components/Header';
import { GET, baseImageURL } from '../helper/apiConstants';
import { makeAPIRequest } from '../helper/globalFunctions';
import { useSelector } from 'react-redux';

const DetailsScreen = (props: any) => {
    const { theme } = useSelector((state: any) => state.theme);
    const { selectedItem, title } = props?.route?.params;
    const id = selectedItem?.id;
    const media_type = selectedItem?.media_type;
    const [data, setData] = useState<any>();


    useEffect(() => {
        const options = {
            method: GET,
            url: `/${media_type}/${id}`,
            params: {
                language: "en-US",
            }
        };
        makeAPIRequest(options).then((res: any) => {
            setData(res.data || [])
        })
            .catch(e => {
                Alert.alert("Something Went Wrong...!")
            });

    }, []);
    return (
        <View style={{ ...styles.container, backgroundColor: theme?.bgColor }}>
            <Header
                title={title}
                left={true}
                right={true}
                onRightPress={() => props?.navigation.goBack()}
            />
            <View style={{ marginHorizontal: 40 }}>
                <Image
                    source={{ uri: `${baseImageURL}${data?.poster_path}` }}
                    style={styles.imageStyle}
                />
                <ScrollView scrollEnabled={false} horizontal style={styles.scroll}>
                    {data?.production_companies?.map((item: any) => {
                        return (
                            item?.logo_path && (
                                <Image
                                    source={{
                                        uri: `${baseImageURL}${item?.logo_path}`,
                                    }}
                                    style={styles.productionImage}
                                    resizeMode={'contain'}
                                />
                            )
                        );
                    })}
                </ScrollView>
                <Text style={styles.textStyle}>
                    Title: {data?.original_title || data?.original_name}
                </Text>
                <Text style={styles.textStyle}>
                    Open: {data?.release_date || data?.first_air_date}
                </Text>

                {data?.number_of_episodes && <Text style={styles.textStyle}>
                    Trilogy: {data?.number_of_episodes}
                </Text>}
                <Text style={styles.textStyle}>
                    Country: {data?.production_countries?.[0]?.iso_3166_1}
                </Text>
                <Text style={styles.textStyle}>
                    Genre: {data?.genres?.map((item: any) => item?.name).join(', ')}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: { alignSelf: 'flex-end', marginBottom: 30, marginTop: 10 },

    imageStyle: {
        height: 400,
        width: '100%',
        alignSelf: 'center',
        marginTop: 50,
    },
    productionImage: {
        height: 40,
        width: 40,
        backgroundColor: 'white',
        marginEnd: 8,
    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '500',
        letterSpacing: 0.2,
        lineHeight: 25,
    },
    btnStyle: {
        backgroundColor: '#FFF',
        width: 100,
        height: 45,
        alignSelf: 'center',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    next: {
        fontSize: 20,
        fontWeight: '500',
    },
});

export default DetailsScreen;