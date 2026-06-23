import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Predicate<T extends unknown> extends Object{
    test(arg0: T): boolean;
}