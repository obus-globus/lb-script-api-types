import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AFSupplier<T extends Object | number | string | boolean> extends Object{
    get(): T;
}