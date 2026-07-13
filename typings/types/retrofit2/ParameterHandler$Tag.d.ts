import type { Class } from '../java/lang/Class.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { ParameterHandler } from '../retrofit2/ParameterHandler.d.ts'
import type { RequestBuilder } from '../retrofit2/RequestBuilder.d.ts'
export class ParameterHandler$Tag<T extends unknown> extends ParameterHandler<T> {
    constructor(arg0: Class<T>)
    // private cls: Class<T>;
    apply(arg0: RequestBuilder, arg1: T): void;
}