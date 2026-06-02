import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export interface ClosedRange<T extends Comparable<T>> extends Object{
    readonly endInclusive: T;
    readonly start: T;
    contains(value: T): boolean;
    isEmpty(): boolean;
}