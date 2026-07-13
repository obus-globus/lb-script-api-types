import type { Method } from '../java/lang/reflect/Method.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { RequestBody } from '../okhttp3/RequestBody.d.ts'
import type { Converter } from '../retrofit2/Converter.d.ts'
import type { ParameterHandler } from '../retrofit2/ParameterHandler.d.ts'
import type { RequestBuilder } from '../retrofit2/RequestBuilder.d.ts'
export class ParameterHandler$PartMap<T extends unknown> extends ParameterHandler<{ [key: string]: T }> {
    constructor(arg0: Method, arg1: number, arg2: Converter<T, RequestBody>, arg3: string)
    // private method: Method;
    // private p: number;
    // private transferEncoding: string;
    // private valueConverter: Converter<T, RequestBody>;
    apply(arg0: RequestBuilder, arg1: { [key: string]: T }): void;
}