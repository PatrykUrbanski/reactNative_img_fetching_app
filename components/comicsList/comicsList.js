import React, {useEffect, useState} from "react"
import {FlatList, Text, View} from 'react-native';

export const ComicsList = () => {
    const [comicsList, setComicsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const firstCall = "http://xkcd.com/info.0.json";

    const getData = async (url) => {
        fetch(url)
            .then((response => response.json()))
            .then((responseJson) => {
                setComicsList(prevState => [...prevState, responseJson]);
                setLoading(false);
            });
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
            <View>
                <Text>{item.alt}</Text>
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
