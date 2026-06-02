import type { Object } from '../../../java/lang/Object.d.ts'
export interface ToLongFunction<T extends Object | number | string | boolean> extends Object{
    applyAsLong(arg0: T): number;
}