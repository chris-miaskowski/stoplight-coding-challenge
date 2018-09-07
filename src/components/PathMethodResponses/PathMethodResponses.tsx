import * as React from 'react';
import { IProps } from './types';

export const PathMethodResponses = (props: IProps) => (
  <div>
    <div id="currentResponse">
      <h3>Server response</h3>
      <pre>{props.response}</pre>
    </div>
    <div id="pathMethodResponses">
      <h3>Example responses</h3>
      <div id="pathMethodResponse">
        <span>Code:</span>
        <span>Description:</span>
        <div>Schema: {props.schema}</div>
        <div id="pathMethodResponseExamples">
          <div id="pathMethodResponseExample" data-type="application-json">
            <pre>Some JSON</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
);
