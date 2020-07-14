import React, {useEffect, useState} from "react"
import {FlatList, Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import {ComicsCard} from "./comicsCard";
import {styles} from "../../styles/styles";

export const ComicsList = ({ navigation }) => {
    const [comicsList, setComicsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fetchingError, setFetchingError] = useState(false);
    const firstCall = "http://xkcd.com/info.0.json";
    let numberOfComicsRendered = 8;
    const [loadMoreCounter, setLoadMoreCounter] = useState(numberOfComicsRendered + 1);

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

    const handleLoadMore = () => {
        getData(`http://xkcd.com/${comicsList[0].num - loadMoreCounter}/info.0.json`);
        setLoadMoreCounter(loadMoreCounter + 1)
    };

    useEffect(() => {
        getData(firstCall);
    }, []);

    useEffect(() => {
        let counter = 1;
        if (!loading) {
            let fetchingInterval = setInterval(() => {
                getData(`http://xkcd.com/${comicsList[0].num - counter}/info.0.json`);
                counter++;
                counter === numberOfComicsRendered && clearInterval(fetchingInterval);
            }, 400)
        }
    },[loading]);

    return (
        !fetchingError
            ? <View style={styles.mainContainer}>
                <FlatList
                    contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                    data={comicsList}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => {navigation.navigate("Details", item)}}>
                            <ComicsCard item={item} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={0}
                />
            </View>
            : <Text>Something went wrong my dear fellow comics lover.</Text>
    )
};
