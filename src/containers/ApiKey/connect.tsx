import { connect } from "react-redux";
import { ApiKey } from "../../components/ApiKey/ApiKey";
import { IAppState } from "../../types";
import { setKey } from "./actions";

const mapStateToProps = (state: IAppState) => ({
  apiKey: state.apiKey
});

const mapDispatchToProps = (dispatch: Function) => ({
  setKey: (key: string) => dispatch(setKey(key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiKey);
