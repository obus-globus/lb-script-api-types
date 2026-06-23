import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AFIOSupplier<T extends unknown> extends Object{
    get(): T;
}