import type { Method } from '../java/lang/reflect/Method.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { RequestBody } from '../okhttp3/RequestBody.d.ts'
import type { Converter } from '../retrofit2/Converter.d.ts'
import type { ParameterHandler } from '../retrofit2/ParameterHandler.d.ts'
import type { RequestBuilder } from '../retrofit2/RequestBuilder.d.ts'
export class ParameterHandler$Body<T extends unknown> extends ParameterHandler<T> {
    constructor(arg0: Method, arg1: number, arg2: Converter<T, RequestBody>)
    // private converter: Converter<T, RequestBody>;
    // private method: Method;
    // private p: number;
    apply(arg0: RequestBuilder, arg1: T): void;
}