import type { Object } from '../java/lang/Object.d.ts'
import type { RequestBuilder } from '../retrofit2/RequestBuilder.d.ts'
export abstract class ParameterHandler<T extends unknown> extends Object {
    constructor()
    apply(arg0: RequestBuilder, arg1: T): void;
    array(): ParameterHandler<Object>;
    iterable(): ParameterHandler<T[]>;
}