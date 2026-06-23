import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface EqualityComparator<T extends unknown> extends Object{
    equals(arg0: T, arg1: T): boolean;
    equals(other: Object | null): boolean;
    hashCode(): number;
    hashCode(arg0: T): number;
}