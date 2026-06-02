import type { Range } from '../../../com/vdurmont/semver4j/Range.d.ts'
import type { Requirement$RequirementOperator } from '../../../com/vdurmont/semver4j/Requirement$RequirementOperator.d.ts'
import type { Semver } from '../../../com/vdurmont/semver4j/Semver.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Requirement extends Object {
    static build(paramarg0: Semver): Requirement;
    static buildCocoapods(paramarg0: string): Requirement;
    static buildIvy(paramarg0: string): Requirement;
    static buildLoose(paramarg0: string): Requirement;
    static buildNPM(paramarg0: string): Requirement;
    static buildStrict(paramarg0: string): Requirement;
    constructor(arg0: Range, arg1: Requirement, arg2: Requirement$RequirementOperator, arg3: Requirement)
    // private op: Requirement$RequirementOperator;
    // private range: Range;
    // private req1: Requirement;
    // private req2: Requirement;
    equals(arg0: Object | null): boolean;
    // private getAllRanges(arg0: Requirement, arg1: Range[]): Range[];
    hashCode(): number;
    isSatisfiedBy(arg0: Semver): boolean;
    isSatisfiedBy(arg0: string): boolean;
    toString(): string;
}