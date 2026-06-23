import type { ComparisonChain } from '../../../../com/google/common/collect/ComparisonChain.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class ComparisonChain$InactiveComparisonChain extends ComparisonChain {
    static start(): ComparisonChain;
    constructor(result: number)
    // private result: number;
    compare<T extends unknown>(left: T, right: T, comparator: (param0: Object) => boolean): ComparisonChain;
    compare(left: boolean, right: boolean): ComparisonChain;
    compare(left: Comparable<Object>, right: Comparable<Object>): ComparisonChain;
    compare(left: number, right: number): ComparisonChain;
    compareFalseFirst(left: boolean, right: boolean): ComparisonChain;
    compareTrueFirst(left: boolean, right: boolean): ComparisonChain;
    result(): number;
}