import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ObjectPool$ObjectSupplier<T extends Object | number | string | boolean> extends Object{
    get(): T;
}