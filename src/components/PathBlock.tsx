import React = require("react");
import { omit } from "lodash";
import { PathMethod } from "./PathMethod";

export class PathBlock extends React.Component<any, any> {
    public render() {
        const path = this.props.path;
        const pathMethods = omit(path, 'parameters');
        const pathMethodsElements = Object.entries(pathMethods).map(([methodName, method]) => {
            return (<PathMethod key={methodName} pathName={this.props.pathName}
                methodName={methodName} method={method}
                parameters={path.parameters} api={this.props.api} />);
        });

        return (
            <div id="pathBlock" className="card">
                <div className="card-body">
                    <div id="pathHeader">
                        <h2>{this.props.pathName}</h2>
                    </div>
                    <div id="pathMethodsCollection" className="accordion">
                        {pathMethodsElements}
                    </div>
                </div>
            </div>
        );
    }
}