import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface BoundedFloatFunction<C extends unknown> extends Object {
    apply(c: C): number;
    comap<C2 extends unknown>(function_: (param0: C2) => C): BoundedFloatFunction<C2>;
    maxValue(): number;
    minValue(): number;
}