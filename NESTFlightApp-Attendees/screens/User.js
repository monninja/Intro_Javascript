import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from '../components/DetailListItem';

import colors from '../utils/colors';
import { fetchUserContact } from '../utils/api';
import store from '../store';

export default class User extends React.Component {
  static navigationOptions = ({ navigation: { navigate } }) => ({
    title: 'My Profile',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: colors.greyLight,
    },
    headerRight: (
      <MaterialIcons
        name="settings"
        size={24}
        style={{ color: 'black', marginRight: 10 }}
        onPress={() => navigate('Options')}
      />
    ),
  });

  state = {
    user: store.getState().user,
    loading: store.getState().isFetchingUser,
    error: store.getState().error,
  };

  async componentDidMount() {
    this.unsubscribe = store.onChange(() =>
      this.setState({
        user: store.getState().user,
        loading: store.getState().isFetchingUser,
        error: store.getState().error,
      }),
    );

    const user = await fetchUserContact();

    store.setState({ user, isFetchingUser: false });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { user, loading, error } = this.state;
    const { avatar, name, phone, email, cell} = user;

    console.log(user);
    return (
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Error...</Text>}

        {!loading && (
          <ContactThumbnail
            avatar={avatar}
            name={name}
            phone={phone}
          />
        )}
        
        {!loading && (
          <DetailListItem
            icon="mail"
            title="Email"
            subtitle={email}
          />
        )}
        {!loading && (
          <DetailListItem
            icon="phone"
            title="Work"
            subtitle={phone}
          />
        )}
        {!loading && (
          <DetailListItem
            icon="smartphone"
            title="Personal"
            subtitle={cell}
          />
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue
  },
});
