import type { Object } from '../../../java/lang/Object.d.ts'
export interface ToLongFunction<T extends unknown> extends Object{
    applyAsLong(arg0: T): number;
}