import * as React from "react";
import { PathBlock } from "./PathBlock/PathBlock";

export class PathsBlocksCollection extends React.Component<any, any> {
    public render() {
        const paths = this.props.paths;
        const pathBlocksElements = Object.keys(paths).map((pathName) => {
            return (<PathBlock key={pathName} pathName={pathName} path={paths[pathName]} api={this.props.api} />);
        });
        return (
            <div id="pathsBlocksCollection">
                {pathBlocksElements}
            </div>
        );
    }
}
