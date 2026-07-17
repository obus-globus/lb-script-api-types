import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { VersionComparisonOperator } from '../../../../../../net/fabricmc/loader/api/metadata/version/VersionComparisonOperator.d.ts'
import type { VersionInterval } from '../../../../../../net/fabricmc/loader/api/metadata/version/VersionInterval.d.ts'
import type { VersionPredicate } from '../../../../../../net/fabricmc/loader/api/metadata/version/VersionPredicate.d.ts'
import type { VersionPredicate$PredicateTerm } from '../../../../../../net/fabricmc/loader/api/metadata/version/VersionPredicate$PredicateTerm.d.ts'
export class VersionPredicateParser$SingleVersionPredicate extends Object implements VersionPredicate, VersionPredicate$PredicateTerm {
    constructor(arg0: VersionComparisonOperator, arg1: Version)
    readonly operator: VersionComparisonOperator;
    // private refVersion: Version;
    equals(arg0: Object | null): boolean;
    getInterval(): VersionInterval;
    getOperator(): VersionComparisonOperator;
    getReferenceVersion(): Version;
    getTerms(): VersionPredicate$PredicateTerm[];
    hashCode(): number;
    test(arg0: Version): boolean;
    toString(): string;
}