import { Security } from "swagger-schema-official";

export interface IProps {
  securityDefinitions: {
    [securityDefinitionName: string]: Security;
  };
  securityDefinitionName: string;
  setSecurityDefinitionName(name: string): void;
}
