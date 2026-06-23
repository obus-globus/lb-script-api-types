import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AFFuture<T extends unknown> extends Object{
    get(): T;
}