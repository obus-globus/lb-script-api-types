import type { Method } from '../java/lang/reflect/Method.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Converter } from '../retrofit2/Converter.d.ts'
import type { ParameterHandler } from '../retrofit2/ParameterHandler.d.ts'
import type { RequestBuilder } from '../retrofit2/RequestBuilder.d.ts'
export class ParameterHandler$Path<T extends unknown> extends ParameterHandler<T> {
    constructor(arg0: Method, arg1: number, arg2: string, arg3: Converter<T, string>, arg4: boolean)
    // private encoded: boolean;
    // private method: Method;
    // private name: string;
    // private p: number;
    // private valueConverter: Converter<T, string>;
    apply(arg0: RequestBuilder, arg1: T): void;
}