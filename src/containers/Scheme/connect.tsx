import { connect } from 'react-redux';
import { setScheme } from './actions';
import { Scheme } from '../../components/Scheme/Scheme';
import { IAppState } from '../../types';

const mapStateToProps = (state: IAppState) => ({
  scheme: state.scheme,
  schemes: state.spec ? state.spec.schemes : [],
});

const mapDispatchToProps = (dispatch: Function) => ({
    setScheme: (scheme: string) => dispatch(setScheme(scheme)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Scheme);
