import { connect } from "react-redux";
import { Authentication } from "../../components/Authentication/Authentication";
import { IAppState } from "../../types";
import { setSecurityDefinitionName } from "./actions";

const mapStateToProps = (state: IAppState) => ({
  securityDefinitions: state.spec ? state.spec.securityDefinitions : {},
  securityDefinitionName: state.securityDefinitionName
});

const mapDispatchToProps = (dispatch: Function) => ({
  setSecurityDefinitionName: (name: string) =>
    dispatch(setSecurityDefinitionName(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication);
