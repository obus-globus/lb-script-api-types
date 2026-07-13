import type { Object } from '../java/lang/Object.d.ts'
import type { Converter } from '../retrofit2/Converter.d.ts'
import type { ParameterHandler } from '../retrofit2/ParameterHandler.d.ts'
import type { RequestBuilder } from '../retrofit2/RequestBuilder.d.ts'
export class ParameterHandler$Header<T extends unknown> extends ParameterHandler<T> {
    constructor(arg0: string, arg1: Converter<T, string>, arg2: boolean)
    // private allowUnsafeNonAsciiValues: boolean;
    // private name: string;
    // private valueConverter: Converter<T, string>;
    apply(arg0: RequestBuilder, arg1: T): void;
}