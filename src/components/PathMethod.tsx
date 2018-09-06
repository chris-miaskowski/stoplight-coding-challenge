import React = require("react");
import { get } from 'lodash';

import { PathMethodResponses } from "./PathMethodResponses";
import { PathExecutionBlock } from "./PathExecutionBlock";

export class PathMethod extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = { response: "" };
    }

    public render() {
        const method = this.props.method;
        const parameters = (this.props.parameters || []).concat(method.parameters || []);
        const methodName = this.props.methodName;

        return (
            <div id="pathMethod" className="card">
                <div className="card-header" data-toggle="collapse" data-target={`#${method.operationId}`}
                    aria-expanded="true" aria-controls={method.operationId}>
                    <h3 className="badge badge-primary">{methodName}</h3>
                    <span className="pl-3">{method.summary}</span>
                    <span className="float-right"><b>Tags</b>: {method.tags.join(',')}</span>
                </div>
                <div id={method.operationId} className="collapse show" data-parent="#pathMethodsCollection">
                    <div className="card-body">
                        <PathExecutionBlock parameters={parameters} onExecute={this.handleExecute.bind(this, methodName)} />
                        <PathMethodResponses response={this.state.response} />
                    </div>
                </div>
            </div>
        );
    }

    private handleExecute(methodName: string, inputBatch: any) {
        const api = this.props.api;
        // TODO: get schema from a user selection
        // TODO: get apiKey from the path configuration
        // TODO: get the authorization method from the spec        
        let url = `http://${api.host}${this.props.pathName}?apikey=123`;
        const query = inputBatch
            .filter((input: any) => input.in === 'query')
            .map((input: any) => `${input.name}=${input.value}`)
            .join('&');

        if (query) {
            url += `\&${query}`;
        }

        inputBatch
            .filter((input: any) => input.in === 'path')
            .forEach((input: any) => {
                url = url.replace(`\{${input.name}\}`, input.value);
            });

        const body = get(inputBatch
            .find((input: any) => input.in === 'body'), 'value');


        // TODO: get Content-Type from spec
        let options: any = {
            method: methodName,
            headers: {
                'Content-Type': 'application/json'
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