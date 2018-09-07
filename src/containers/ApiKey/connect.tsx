import { connect } from 'react-redux';
import { setKey } from './actions';
import { ApiKey } from '../../components/ApiKey/ApiKey';
import { IAppState } from '../../types';

const mapStateToProps = (state: IAppState) => ({
  apiKey: state.apiKey,
});

const mapDispatchToProps = (dispatch: Function) => ({
  setKey: (key: string) => dispatch(setKey(key)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApiKey);
