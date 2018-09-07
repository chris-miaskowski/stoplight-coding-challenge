import { Spec } from 'swagger-schema-official';

export interface IProps {
  apiKey?: string;
  method: any;
  methodName: string;
  pathName: string;
  parameters: any[];
  spec?: Spec;
}
