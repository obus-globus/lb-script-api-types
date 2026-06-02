import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Predicate<T extends Object | number | string | boolean> extends Object{
    test(value: T): boolean;
}