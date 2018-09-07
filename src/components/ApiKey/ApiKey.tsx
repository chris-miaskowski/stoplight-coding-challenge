import * as React from "react";

export class ApiKey extends React.Component<any, any> {
  private onApiKeyChange(event: React.FormEvent<HTMLInputElement>) {
    this.props.setKey(event.currentTarget.value);
  }

  public render() {
    return (
      <div className="form-group">
        <label>Api key</label>
        <input
          className="form-control"
          onChange={event => this.onApiKeyChange(event)}
          value={this.props.apiKey}
        />
      </div>
    );
  }
}
