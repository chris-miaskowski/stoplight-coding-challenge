import { Spec } from "swagger-schema-official";

export type ISpec = Spec;

export interface IApp {
  spec: ISpec;
}

export interface IAppProps {
  spec: ISpec;
}

export interface IAppState {
  spec?: ISpec;
  apiKey?: string;
}
