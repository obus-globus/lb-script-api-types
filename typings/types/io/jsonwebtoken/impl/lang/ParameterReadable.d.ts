import type { Parameter } from '../../../../io/jsonwebtoken/impl/lang/Parameter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ParameterReadable extends Object{
    get<T extends unknown>(arg0: Parameter<T>): T;
}