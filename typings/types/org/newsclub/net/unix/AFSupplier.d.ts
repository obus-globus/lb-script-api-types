import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AFSupplier<T extends unknown> extends Object{
    get(): T;
}