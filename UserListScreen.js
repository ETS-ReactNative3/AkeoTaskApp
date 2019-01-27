import React, { PureComponent } from 'react';
import { View,Image,  FlatList, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';


export default class UserListScreen extends PureComponent {
    state = {
        userList: [], 
        loading: true
    }

    componentWillUnmount() {
        this.setState({userList: [], loading: true})
    } 
    componentDidMount(){
        return fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              loading: false,
              userList: responseJson,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }
    renderItem(data) {
        console.log("data", data);
        return <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                    <View  style={styles.listItemContainer}>
                        <Text style={styles.userItemHeader}>{data.name}</Text>
                        <Image source={{uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg'}} 
                                style={styles.userImage}/>
                    </View>
                </TouchableOpacity>
    }

    render() {
        const { userList, loading } = this.state;
        if(!loading) {
            return  <View style={{flex: 1, paddingTop:20}}>
                        <FlatList
                        data={userList}
                        renderItem={({item}) => this.renderItem(item)}
                        keyExtractor={({id}, index) => id}
                        />
                    </View>
        } else {
            return <ActivityIndicator
                                    color = '#bc2b78'
                                    size = "large"
                                    style = {styles.activityIndicator}/>
        }
    }
}

const styles = StyleSheet.create({
    listItemContainer: {
        borderStyle: 'solid',
        borderColor: '#fff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
      },
      
    userItemHeader: {  
        color: 'black',
        fontSize: 24,
    },
    userImage: {
        backgroundColor: 'transparent',
        height: 50,
        width: 50
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
     }
})