import { connect } from "react-redux";
import { PathMethod } from "../../components/PathMethod/PathMethod";
import { IAppState } from "../../types";

const mapStateToProps = (state: IAppState) => ({
  apiKey: state.apiKey,
  spec: state.spec,
  scheme: state.scheme,
  securityDefinitionName: state.securityDefinitionName
});

export default connect(mapStateToProps)(PathMethod);
