import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ExecutionContext } from '../../../../../team/unnamed/mocha/runtime/ExecutionContext.d.ts'
import type { Function } from '../../../../../team/unnamed/mocha/runtime/value/Function.d.ts'
import type { Function$Arguments } from '../../../../../team/unnamed/mocha/runtime/value/Function$Arguments.d.ts'
import type { Value } from '../../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export class ReflectiveFunction<T extends Object | number | string | boolean> extends Object implements Function<T> {
    constructor(arg0: Object, arg1: Method)
    // private method: Method;
    // private object: Object;
    evaluate(arg0: ExecutionContext<T>, arg1: Function$Arguments): Value;
    evaluate(arg0: ExecutionContext<T>): Value;
    pure(): boolean;
}