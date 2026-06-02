import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TriConsumer<A extends Object | number | string | boolean, B extends Object | number | string | boolean, C extends Object | number | string | boolean> extends Object{
    accept(arg0: A, arg1: B, arg2: C): void;
}