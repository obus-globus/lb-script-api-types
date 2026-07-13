import type { Method } from '../java/lang/reflect/Method.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Converter } from '../retrofit2/Converter.d.ts'
import type { ParameterHandler } from '../retrofit2/ParameterHandler.d.ts'
import type { RequestBuilder } from '../retrofit2/RequestBuilder.d.ts'
export class ParameterHandler$QueryMap<T extends unknown> extends ParameterHandler<{ [key: string]: T }> {
    constructor(arg0: Method, arg1: number, arg2: Converter<T, string>, arg3: boolean)
    // private encoded: boolean;
    // private method: Method;
    // private p: number;
    // private valueConverter: Converter<T, string>;
    apply(arg0: RequestBuilder, arg1: { [key: string]: T }): void;
}