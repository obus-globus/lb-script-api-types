import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface EqualityComparator<T extends Object | number | string | boolean> extends Object{
    equals(arg0: T, arg1: T): boolean;
    hashCode(arg0: T): number;
}