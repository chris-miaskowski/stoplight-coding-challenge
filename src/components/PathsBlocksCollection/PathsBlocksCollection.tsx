import * as React from "react";
import { IProps } from './types';
import { PathBlock } from '../PathBlock/PathBlock';

export class PathsBlocksCollection extends React.Component<IProps, Object> {
  componentDidMount() {
    this.props.loadSpec();
  }

  private renderBlockElements() {
    const {
      spec
    } = this.props;

    return Object.entries(spec.paths)
      .map(([pathName, path]) => (
        <PathBlock
          key={pathName}
          pathName={pathName}
          path={path}
        />
      ));
  }

  render() {
    const {
      spec
    } = this.props;

    if (!spec) return null;

    return (
      <div id="pathsBlocksCollection">
        {this.renderBlockElements()}
      </div>
    );
  }
}
