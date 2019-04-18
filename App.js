import { createStackNavigator, createAppContainer } from 'react-navigation'

// Screens
import Login from './screens/Login'
import Groups from './screens/Groups'
import GroupDetail from './screens/GroupDetail'

//  TODO: Qr code library :
//  https://github.com/awesomejerry/react-native-qrcode-svg

// Config
const config = {
  initialRouteName: "Groups",
  headerMode: "None"
}

const RootStack = createStackNavigator(
  {
    Login: { screen: Login, path: "/screens/Login" },
    Groups: { screen: Groups, path: "/screens/Groups" },
    GroupDetail: { screen: GroupDetail, path: "/screens/GroupDetail" }
  },
  config
)

const App = createAppContainer(RootStack);

export default App;