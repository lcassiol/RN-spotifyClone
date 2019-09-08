import React, {Component} from 'react';
import View from 'react-native';

import {
  Container,
  PodcastList,
  PageTitle,
  Podcast,
  Cover,
  Info,
  Title,
  Count,
} from './styles';

/**
 * REDUX
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//PodcastsActions
import PodcastsActions from '../../store/ducks/podcasts';
class Main extends Component {
  componentDidMount() {
    const {loadRequest} = this.props;
    loadRequest();
  }

  handlePodcastPress = podcast => {
    const {navigation} = this.props;

    navigation.navigate('Podcast', {podcast});
  };

  render() {
    const {podcasts, currentPodCast} = this.props;

    console.log(['podcasts', podcasts]);

    return (
      <Container>
        <PodcastList
          ListHeaderComponent={() => <PageTitle>Podcasts</PageTitle>}
          data={podcasts.data}
          keyExtractor={podcast => String(podcast.id)}
          renderItem={({item: podcast}) => (
            <Podcast onPress={() => this.handlePodcastPress(podcast)}>
              <Cover source={{uri: podcast.cover}} />
              <Info>
                <Title
                  active={currentPodCast && currentPodCast.id === podcast.id}>
                  {podcast.title}
                </Title>
                <Count>{`${podcast.tracks.length} episódios`}</Count>
              </Info>
            </Podcast>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  podcasts: state.podcasts,
  currentPodCast: state.player.podcast ? state.player.podcast : null,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PodcastsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
