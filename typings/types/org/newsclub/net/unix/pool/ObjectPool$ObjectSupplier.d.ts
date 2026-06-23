import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ObjectPool$ObjectSupplier<T extends unknown> extends Object{
    get(): T;
}