import {call, put} from 'redux-saga/effects';

//API
import axios from '../../services/axios';

//Podcasts
import PodcastsActions from '../ducks/podcasts';

export function* load() {
  try {
    const {data} = yield call(axios.get, '/podcasts');
    console.tron.log(['success', data]);
    yield put(PodcastsActions.loadSuccess(data));
  } catch (err) {
    console.tron.log(['error', err]);
    yield put(PodcastsActions.loadFailure());
  }
}
