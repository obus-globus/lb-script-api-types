import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ReferenceKey<T extends Object | number | string | boolean> extends Object{
    clear(): void;
    get(): T;
}