import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Lazy<T extends unknown> extends Object{
    get(): T;
}