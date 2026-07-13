import type { Method } from '../java/lang/reflect/Method.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { ParameterHandler } from '../retrofit2/ParameterHandler.d.ts'
import type { RequestBuilder } from '../retrofit2/RequestBuilder.d.ts'
export class ParameterHandler$Headers extends ParameterHandler<Pair<string, string>[]> {
    constructor(arg0: Method, arg1: number)
    // private method: Method;
    // private p: number;
    apply(arg0: RequestBuilder, arg1: Pair<string, string>[]): void;
}