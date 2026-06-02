import type { Range$RangeOperator } from '../../../com/vdurmont/semver4j/Range$RangeOperator.d.ts'
import type { Semver } from '../../../com/vdurmont/semver4j/Semver.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Range extends Object {
    constructor(arg0: Semver, arg1: Range$RangeOperator)
    constructor(arg0: string, arg1: Range$RangeOperator)
    // private op: Range$RangeOperator;
    // private version: Semver;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isSatisfiedBy(arg0: Semver): boolean;
    isSatisfiedBy(arg0: string): boolean;
    toString(): string;
}