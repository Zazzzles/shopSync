import { createStackNavigator, createAppContainer } from 'react-navigation'

// Screens
import Login from './screens/Login'
import Groups from './screens/Groups'

// Config
const config = {
  initialRouteName: "Groups",
  headerMode: "None"
}

const RootStack = createStackNavigator(
  {
    Login: { screen: Login, path: "/screens/Login" },
    Groups: { screen: Groups, path: "/screens/Groups" }
  },
  config
)

const App = createAppContainer(RootStack);

export default App;