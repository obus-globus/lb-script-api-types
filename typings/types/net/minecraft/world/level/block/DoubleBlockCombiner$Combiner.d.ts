import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DoubleBlockCombiner$Combiner<S extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Object{
    acceptDouble(first: S, second: S): T;
    acceptNone(): T;
    acceptSingle(single: S): T;
}