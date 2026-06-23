import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IoSupplier<T extends unknown> extends Object{
    get(): T;
}