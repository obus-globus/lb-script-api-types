import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ExecutionContext } from '../../../../../team/unnamed/mocha/runtime/ExecutionContext.d.ts'
import type { Function$Arguments } from '../../../../../team/unnamed/mocha/runtime/value/Function$Arguments.d.ts'
import type { Value } from '../../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export interface Function<T extends Object | number | string | boolean> extends Object, Value{
    evaluate(arg0: ExecutionContext<T>): Value;
    evaluate(arg0: ExecutionContext<T>, arg1: Function$Arguments): Value;
    getAsBoolean(): boolean;
    getAsNumber(): number;
    getAsString(): string;
    isString(): boolean;
    pure(): boolean;
}