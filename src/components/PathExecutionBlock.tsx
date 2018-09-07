import * as React from "react";

export class PathExecutionBlock extends React.Component<any, any> {
    private inputs: any[];

    constructor(props: any) {
        super(props);
        this.inputs = props.parameters.map((p:any) => React.createRef());
    }

    private handleSubmit = (event:any) => {
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
        const parametersElements = parameters.map((parameter:any, index:any) => {
            return (
                <div key={parameter.name}>
                    <label>
                        {parameter.name}:
                        <input type="text" ref={this.inputs[index]} />
                    </label>
                </div>
            );
        });

        return (
            <form onSubmit={this.handleSubmit}>
                <div id="pathMethodParameters">
                    {parametersElements}
                </div>
                <input type="submit" value="Execute" />
            </form>
        );
    }
}
