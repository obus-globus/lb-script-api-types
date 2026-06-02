import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AFIOSupplier<T extends Object | number | string | boolean> extends Object{
    get(): T;
}