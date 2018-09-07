import * as React from "react";
import { IProps } from "./types";

export const PathMethodResponses = (props: IProps) => {
  let currentResponse = null;
  if (props.response) {
    currentResponse = (
      <div id="currentResponse">
        <h3>Server response</h3>
        <pre>{props.response}</pre>
      </div>
    );
  }

  return (
    <div>
      {currentResponse}
      <div id="pathMethodResponses">
        <h3>Example responses</h3>
        <div id="pathMethodResponse">
          <div>Code: TODO</div>
          <div>Description: TODO</div>
          <div>Schema: TODO</div>
          <div id="pathMethodResponseExamples">
            <div id="pathMethodResponseExample" data-type="application-json">
              <pre>TODO</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
