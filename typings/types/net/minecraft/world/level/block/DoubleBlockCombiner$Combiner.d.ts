import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DoubleBlockCombiner$Combiner<S extends unknown, T extends unknown> extends Object{
    acceptDouble(first: S, second: S): T;
    acceptNone(): T;
    acceptSingle(single: S): T;
}