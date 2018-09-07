import * as React from "react";

export class ApiKey extends React.Component<any, any> {
    private onApiKeyChange(event : React.FormEvent<HTMLInputElement>) {
        this.props.setKey(event.currentTarget.value);
    }

    render() {
        return (
          <label>
            Api key: <input onChange={event => this.onApiKeyChange(event)} />
          </label>
        )
  }
}
