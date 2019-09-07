import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';

class TeamInviteScreen extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return(
      <SearchBar
        platform="ios"
        placeholder="検索"
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}

const styles = StyleSheet.create({

});

export default TeamInviteScreen;
