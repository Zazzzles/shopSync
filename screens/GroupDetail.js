import React, { Component } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  ImageBackground
} from "react-native"

//  Lib
import Sidebar from "react-native-sidebar"

//  Config
import Layout from "../config/layout"
import Colors from "../config/colors"

//  Components
import Button from "../components/Button"
import PageLoading from "../components/PageLoading"
import ProductItem from "../components/ProductItem"
import FAB from "../components/FAB"
import Icon from '../components/icons/icons'
import SideNav from '../components/SideNav'

const PRODUCTS_STUB = [
  {
    name: "Toilet tissue",
    bought: false
  },
  {
    name: "Oranges",
    bought: false
  },
  {
    name: "Toothpaste",
    bought: true
  },
  {
    name: "Tinfoil",
    bought: false
  },
  {
    name: "Bread",
    bought: true
  }
]

export default class GroupDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      refreshing: false
    }
  }

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1500)
  }

  handleProductMarked = () => {
    console.log('Product marked')
  }

  renderGroups = () => {
    return PRODUCTS_STUB.map((item, index) => {
      return (
        <ProductItem
          key={index}
          label={item.name}
          fullfilled={item.bought}
          onPress={() => this.handleProductMarked()}
          onLeaveGroup={this.leavingGroup}
        />
      )
    })
  }

  toggleNav = () => {
    this._drawer.open('right')
  }

  render() {
    const { loading, refreshing } = this.state
    const { groupName } = this.props.navigation.state.params
    const { navigation } = this.props
    return (
      <Sidebar
        ref={ref => (this._drawer = ref)}
        rightSidebar={<SideNav/>}
        rightSidebarWidth={150}
        style={{ flex: 1 }}
      >
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this.fetchData}
            />
          }
          contentContainerStyle={styles.container}
        >
          <View style={styles.topbarContainer}>
            <Text style={styles.headingText}> {groupName} </Text>
            <TouchableOpacity style={styles.sidemenuButtonWrapper} onPress={() => this.toggleNav()}>
              <Icon name={'more-vert'} size={22} color={'black'}/>
            </TouchableOpacity>
          </View>

          <Button label={"Add"} style={styles.addButton} icon={"add"} />
          {loading ? <PageLoading placeholderCount={4} /> : this.renderGroups()}
        </ScrollView>
        <FAB icon={"keyboard-arrow-left"} onPress={() => navigation.goBack()} />
      </Sidebar>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...Layout.fullscreen,
    ...Layout.fullscreenPadding,
    backgroundColor: Colors.bg,
    paddingTop: 15
  },
  headingText: {
    color: "black",
    fontSize: 26,
    fontFamily: "sans-serif",
    //marginBottom: 15
  },
  addButton: {
    backgroundColor: Colors.primary,
    width: "100%",
    marginBottom: 15
  },
  topbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  sidemenuButtonWrapper:{
    ...Layout.center,
    height: 35,
    width: 35,
  }
})
