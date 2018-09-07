import * as React from "react";
import { IProps } from './types';
import ApiKey from '../../containers/ApiKey/connect';

const SECURITY_DEFINITIONS_TYPE_FORM_MAP = {
    apiKey: () => <ApiKey/>,
};

export class Authentication extends React.Component<IProps, any> {

    private get securityDefinitionNames() {
        return Object.keys(this.props.securityDefinitions)
            .filter(name => SECURITY_DEFINITIONS_TYPE_FORM_MAP.hasOwnProperty(this.props.securityDefinitions[name].type));
    }

    private onSecurityDefinitionNameChange(event : React.FormEvent<HTMLSelectElement>) {
        this.props.setSecurityDefinitionName(event.currentTarget.value);
    }

    private get securityDefinitionForm() {
        if (!this.props.securityDefinitionName)
            return;

        const type = this.props.securityDefinitions[this.props.securityDefinitionName].type;

        return SECURITY_DEFINITIONS_TYPE_FORM_MAP[type]
            && SECURITY_DEFINITIONS_TYPE_FORM_MAP[type]();
    }

    render() {
        return (
            <div>
                <select value={this.props.securityDefinitionName} onChange={event => this.onSecurityDefinitionNameChange(event)}>
                    {this.securityDefinitionNames.map(name =>
                        <option key={name} value={name}>{name}</option>)}
                </select>

                <div>
                    {this.securityDefinitionForm}
                </div>
            </div>
        );
    }
}
