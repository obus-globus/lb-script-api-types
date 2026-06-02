import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LocalRef<T extends Object | number | string | boolean> extends Object{
    get(): T;
    set(arg0: T): void;
}