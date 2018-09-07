import { connect } from "react-redux";
import { PathsBlocksCollection } from "../../components/PathsBlocksCollection/PathsBlocksCollection";
import { IAppState } from "../../types";
import { loadSpec } from "./actions";

const mapStateToProps = (state: IAppState) => ({
  spec: state.spec
});

const mapDispatchToProps = (dispatch: Function) => ({
  loadSpec: () => dispatch(loadSpec())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PathsBlocksCollection);
