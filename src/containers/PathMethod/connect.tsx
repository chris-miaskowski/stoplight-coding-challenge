import { connect } from 'react-redux';
import { IAppState } from '../../types';
import { PathMethod } from '../../components/PathMethod/PathMethod';

const mapStateToProps = (state: IAppState) => ({
  apiKey: state.apiKey,
  spec: state.spec,
  scheme: state.scheme,
  securityDefinitionName: state.securityDefinitionName
});

export default connect(
  mapStateToProps,
)(PathMethod);
