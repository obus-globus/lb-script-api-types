import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export abstract class ComparisonChain extends Object {
    static start(): ComparisonChain;
    private constructor()
    compare<T extends unknown>(left: T, right: T, comparator: (param0: T, param1: T) => number): ComparisonChain;
    compare(left: boolean, right: boolean): ComparisonChain;
    compare(left: Comparable<Object>, right: Comparable<Object>): ComparisonChain;
    compare(left: number, right: number): ComparisonChain;
    compareFalseFirst(left: boolean, right: boolean): ComparisonChain;
    compareTrueFirst(left: boolean, right: boolean): ComparisonChain;
    result(): number;
}