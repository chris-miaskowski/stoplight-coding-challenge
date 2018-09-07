import * as React from "react";
import { PathBlock } from "../PathBlock/PathBlock";
import { IProps } from "./types";

export class PathsBlocksCollection extends React.Component<IProps, Object> {
  public componentDidMount() {
    this.props.loadSpec();
  }

  private renderBlockElements() {
    const { spec } = this.props;

    return Object.entries(spec.paths).map(([pathName, path]) => (
      <PathBlock key={pathName} pathName={pathName} path={path} />
    ));
  }

  public render() {
    const { spec } = this.props;

    if (!spec) return null;

    return <div id="pathsBlocksCollection">{this.renderBlockElements()}</div>;
  }
}
