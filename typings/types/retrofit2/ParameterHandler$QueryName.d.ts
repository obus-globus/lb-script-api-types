import type { Object } from '../java/lang/Object.d.ts'
import type { Converter } from '../retrofit2/Converter.d.ts'
import type { ParameterHandler } from '../retrofit2/ParameterHandler.d.ts'
import type { RequestBuilder } from '../retrofit2/RequestBuilder.d.ts'
export class ParameterHandler$QueryName<T extends unknown> extends ParameterHandler<T> {
    constructor(arg0: Converter<T, string>, arg1: boolean)
    // private encoded: boolean;
    // private nameConverter: Converter<T, string>;
    apply(arg0: RequestBuilder, arg1: T): void;
}