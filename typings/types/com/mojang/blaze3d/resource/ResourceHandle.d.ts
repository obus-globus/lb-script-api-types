import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ResourceHandle<T extends unknown> extends Object{
    get(): T;
}