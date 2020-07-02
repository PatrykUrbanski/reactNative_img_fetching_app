import React, {useEffect, useState} from "react"
import {FlatList, Text, View, Image} from 'react-native';
import {styles} from "../../styles/styles";
import {elementsThatOverlapOffsets} from "react-native-web/dist/vendor/react-native/VirtualizeUtils";
import {ComicsCard} from "./comicsCard";


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
        return <ComicsCard item={item} />
    };

    return (
             <FlatList
                data={comicsList}
                renderItem={renderRow}
                keyExtractor={(item, index) => index.toString()}
            />
    )
};
