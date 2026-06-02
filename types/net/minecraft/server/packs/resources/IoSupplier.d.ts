import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IoSupplier<T extends Object | number | string | boolean> extends Object{
    get(): T;
}