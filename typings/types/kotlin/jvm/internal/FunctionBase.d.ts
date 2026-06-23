import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function } from '../../../kotlin/Function.d.ts'
export interface FunctionBase<R extends unknown> extends Object, Function<R>{
    readonly arity: number;
}