import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Predicate<T extends unknown> extends Object{
    test(value: T): boolean;
}