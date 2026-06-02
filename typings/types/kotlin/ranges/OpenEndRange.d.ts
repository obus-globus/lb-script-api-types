import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export interface OpenEndRange<T extends Comparable<T>> extends Object{
    readonly endExclusive: T;
    readonly start: T;
    contains(value: T): boolean;
    isEmpty(): boolean;
}