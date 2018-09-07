import * as React from "react";

export class PathExecutionBlock extends React.Component<any, any> {
    private inputs: any[];

    constructor(props: any) {
        super(props);
        this.inputs = props.parameters.map((p: any) => React.createRef());
    }

    private handleSubmit = (event: any) => {
        event.preventDefault();
        const inputBatch = this.inputs.map((input, index) => {
            const paremeter = this.props.parameters[index];
            return {
                name: paremeter.name,
                in: paremeter.in,
                value: input.current.value
            };
        });
        this.props.onExecute(inputBatch);
    }

    public render() {
        const parameters = this.props.parameters;
        const parametersElements = parameters.map((parameter: any, index: any) => {
            return (
                <div key={parameter.name} className="form-group">
                    <label>{parameter.name}</label>
                    <input className="form-control" type="text" ref={this.inputs[index]} />
                </div>
            );
        });

        return (
            <form onSubmit={this.handleSubmit}>
                <div id="pathMethodParameters">
                    {parametersElements}
                </div>
                <input type="submit" className="btn btn-sm btn-danger" value="Execute" />
            </form>
        );
    }
}
