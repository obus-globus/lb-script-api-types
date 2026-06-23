import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ReferenceKey<T extends unknown> extends Object{
    clear(): void;
    get(): T;
}