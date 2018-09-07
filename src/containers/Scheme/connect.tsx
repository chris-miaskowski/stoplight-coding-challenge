import { connect } from "react-redux";
import { Scheme } from "../../components/Scheme/Scheme";
import { IAppState } from "../../types";
import { setScheme } from "./actions";

const mapStateToProps = (state: IAppState) => ({
  scheme: state.scheme,
  schemes: state.spec ? state.spec.schemes : []
});

const mapDispatchToProps = (dispatch: Function) => ({
  setScheme: (scheme: string) => dispatch(setScheme(scheme))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scheme);
