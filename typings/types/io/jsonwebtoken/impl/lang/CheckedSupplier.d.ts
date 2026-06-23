import type { Object } from '../../../../java/lang/Object.d.ts'
export interface CheckedSupplier<T extends unknown> extends Object{
    get(): T;
}