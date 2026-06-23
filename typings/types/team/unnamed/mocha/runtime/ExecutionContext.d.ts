import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Expression } from '../../../../team/unnamed/mocha/parser/ast/Expression.d.ts'
import type { Value } from '../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export interface ExecutionContext<T extends unknown> extends Object{
    entity(): T;
    eval(arg0: Expression): Value;
    flag(): Object;
    flag(arg0: Object): void;
}