import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function } from '../../../kotlin/Function.d.ts'
import type { FunctionBase } from '../../../kotlin/jvm/internal/FunctionBase.d.ts'
export interface FunctionN<R extends unknown> extends Object, Function<R>, FunctionBase<R>{
    readonly arity: number;
    invoke(args: (Object | null)[]): R;
}