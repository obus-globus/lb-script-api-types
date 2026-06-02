import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Lazy<T extends Object | number | string | boolean> extends Object{
    get(): T;
}