import * as React from 'react';
import { get } from 'lodash';

import { PathMethodResponses } from '../PathMethodResponses/PathMethodResponses';
import { PathExecutionBlock } from '../PathExecutionBlock';
import { IProps } from './types';
import { buildUrl } from './utils';

const styles = require('../../styles/index.css');

export class PathMethod extends React.Component<IProps, any> {
  state = { response: '' };

  public render() {
    const {
      method,
      methodName,
      spec,
    } = this.props;

    const parameters = [...(this.props.parameters || []), ...(method.parameters || [])];

    return (
      <div id="pathMethod" className="card">
        <div
          className={`card-header ${styles.clickable}`}
          data-toggle="collapse"
          data-target={`#${method.operationId}`}
          aria-expanded="true"
          aria-controls={method.operationId}
        >
          <h3 className="badge badge-primary">{methodName}</h3>
          <span className="pl-3">{method.summary}</span>
          <span className="float-right"><b>Tags</b>: {method.tags.join(',')}</span>
        </div>
        <div id={method.operationId} className="collapse" data-parent="#pathMethodsCollection">
          <div className="card-body">
            <PathExecutionBlock
              parameters={parameters}
              onExecute={this.handleExecute.bind(this, methodName)}
            />
            <PathMethodResponses
              schema={spec.schemes !== undefined ? spec.schemes.join(', ') : ''}
              response={this.state.response}
            />
          </div>
        </div>
      </div>
    );
  }

  private handleExecute(methodName: string, inputBatch: any) {
    const {
      apiKey,
      spec,
      pathName,
      scheme,
    } = this.props;
    // TODO: get apiKey from the path configuration
    // TODO: get the authorization method from the spec

    const url = buildUrl(
      `${scheme}://${spec.host}${pathName}?apikey=${apiKey}`,
      inputBatch
    );

    const body = get(
      inputBatch.find((input: any) => input.in === 'body'),
      'value',
    );

    let options: any = {
      method: methodName,
      headers: {
        'Content-Type': spec.produces,
      }
    };

    if (body) {
      options.body = JSON.stringify(JSON.parse(body));
    }

    fetch(url, options)
      .then(response => response.json())
      .then(json => {
        this.setState({
          response: JSON.stringify(json)
        });
      });
  }
}
