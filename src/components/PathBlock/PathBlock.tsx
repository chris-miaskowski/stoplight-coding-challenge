import * as React from 'react';
import { omit } from 'lodash';
import PathMethod from '../../containers/PathMethod/connect';
import { IProps } from './types';

export class PathBlock extends React.Component<IProps, any> {
  private renderPathMethodsElement() {
    const {
      path,
      pathName,
    } = this.props;

    const pathMethods = omit(path, 'parameters');
    return Object.entries(pathMethods)
      .map(([methodName, method]) => (
        <PathMethod
          key={methodName}
          pathName={pathName}
          methodName={methodName}
          method={method}
          parameters={path.parameters}
        />
      ));
  }

  public render() {
    const {
      pathName,
    } = this.props;

    return (
      <div id="pathBlock" className="card mb-3">
        <div className="card-body">
          <div id="pathHeader">
            <h2>{pathName}</h2>
          </div>
          <div id="pathMethodsCollection" className="accordion">
            {this.renderPathMethodsElement()}
          </div>
        </div>
      </div>
    );
  }
}
