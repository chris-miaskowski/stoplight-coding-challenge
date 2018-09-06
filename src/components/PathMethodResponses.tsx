import React = require("react");

export class PathMethodResponses extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <div id="currentResponse">
                    <h3>Server response</h3>
                    <pre>{this.props.response}</pre>
                </div>
                <div id="pathMethodResponses">
                    <h3>Example responses</h3>
                    <div id="pathMethodResponse">
                        <span>Code:</span>
                        <span>Description:</span>
                        <div>Schema: </div>
                        <div id="pathMethodResponseExamples">
                            <div id="pathMethodResponseExample" data-type="application-json">
                                <pre>Some JSON</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}