import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ExecutionContext } from '../../../../../team/unnamed/mocha/runtime/ExecutionContext.d.ts'
import type { Function } from '../../../../../team/unnamed/mocha/runtime/value/Function.d.ts'
import type { Function$Arguments } from '../../../../../team/unnamed/mocha/runtime/value/Function$Arguments.d.ts'
import type { Value } from '../../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export class JavaFunction<T extends unknown> extends Object implements Function<T> {
    constructor(arg0: Object, arg1: Method, arg2: (param0: ExecutionContext<T>, param1: Function$Arguments) => Value, arg3: boolean)
    // private function: (param0: ExecutionContext<T>, param1: Function$Arguments) => Value;
    // private method: Method;
    // private object: Object;
    // private pure: boolean;
    // private evaluate(): void;
    evaluate(arg0: ExecutionContext<T>): Value;
    evaluate(arg0: ExecutionContext<T>, arg1: Function$Arguments): Value;
    method(): Method;
    object(): Object;
    pure(): boolean;
}