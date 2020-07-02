import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation"
import {ComicsList} from "../comicsList/comicsList";
import {ComicsDetails} from "../comicsDetails/comicsDetails";

const Stack = createStackNavigator({
    xkcd: {
        screen: ComicsList
    },
    Details: {
        screen: ComicsDetails
    },
    },
    {
    initialRouteName: "xkcd"
    }
);

export default createAppContainer(Stack)
