import React, {useEffect, useState} from "react"
import {FlatList, Text, View, Image} from 'react-native';
import {styles} from "../../styles/styles";


export const ComicsList = () => {
    const [comicsList, setComicsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fetchingError, setFetchingError] = useState(false);
    const firstCall = "http://xkcd.com/info.0.json";

    const getData = async (url) => {
        fetch(url)
            .then((response => response.json()))
            .then((responseJson) => {
                setComicsList(prevState => [...prevState, responseJson]);
                setLoading(false);
            })
            .catch(error => {
                setFetchingError(true)
            })
    };

    useEffect(() => {
        getData(firstCall);
        if (!loading) {
            let counter = 1;
            let fetchingInterval = setInterval(() => {
                getData(`http://xkcd.com/${comicsList[0].num - counter}/info.0.json`);
                counter++;
                counter === 8 && clearInterval(fetchingInterval)
            }, 300)
        }
    }, []);


    const renderRow = ({item}) => {
        return (
            <View styles={{
                width: "100%",
                height: 400
            }}>
                {fetchingError
                    ? <Text>Something went wrong my dear comics lover.</Text>
                    : <View style={styles.row}>
                        <Text style={styles.rowTitle}>{item.title}</Text>
                        <Image style={styles.itemImage} source={{uri:item.img}}/>
                    </View>
                }
            </View>
        )
    };

    return (
        <FlatList
            data={comicsList}
            renderItem={renderRow}
            keyExtractor={(item, index) => index.toString()}
        />

    )
};
