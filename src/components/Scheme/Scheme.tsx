import * as React from "react";

export class Scheme extends React.Component<any, any> {
  private onSchemeChange(event: React.FormEvent<HTMLSelectElement>) {
    this.props.setScheme(event.currentTarget.value);
  }

  public render() {
    return (
      <div className="form-group">
        <select
          className="form-control"
          value={this.props.scheme}
          onChange={event => this.onSchemeChange(event)}
        >
          {this.props.schemes.map((scheme: string) => (
            <option key={scheme} value={scheme}>
              {scheme}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
