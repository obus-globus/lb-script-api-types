import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { ClosedRange } from '../../kotlin/ranges/ClosedRange.d.ts'
export interface ClosedFloatingPointRange<T extends Comparable<T>> extends Object, ClosedRange<T>{
    contains(value: T): boolean;
    contains(value: T): boolean;
    isEmpty(): boolean;
    isEmpty(): boolean;
    lessThanOrEquals(a: T, b: T): boolean;
}