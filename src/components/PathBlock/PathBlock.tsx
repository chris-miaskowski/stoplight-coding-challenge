import * as React from "react";
import { omit } from "lodash";
import { PathMethod } from "../PathMethod";
import { IProps } from "./types";

export class PathBlock extends React.Component<IProps, any> {
    public render() {
        const {
            api,
            path,
            pathName,
        } = this.props;
        const pathMethods = omit(path, 'parameters');
        const pathMethodsElements = Object.entries(pathMethods)
          .map(([methodName, method]) => (
            <PathMethod
                key={methodName}
                pathName={pathName}
                methodName={methodName}
                method={method}
                parameters={path.parameters}
                api={api}
            />
          ));

        return (
            <div id="pathBlock" className="card">
                <div className="card-body">
                    <div id="pathHeader">
                        <h2>{pathName}</h2>
                    </div>
                    <div id="pathMethodsCollection" className="accordion">
                        {pathMethodsElements}
                    </div>
                </div>
            </div>
        );
    }
}
