import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { VersionInterval } from '../../../../../../net/fabricmc/loader/api/metadata/version/VersionInterval.d.ts'
import type { VersionPredicate } from '../../../../../../net/fabricmc/loader/api/metadata/version/VersionPredicate.d.ts'
import type { VersionPredicate$PredicateTerm } from '../../../../../../net/fabricmc/loader/api/metadata/version/VersionPredicate$PredicateTerm.d.ts'
import type { VersionPredicateParser$SingleVersionPredicate } from '../../../../../../net/fabricmc/loader/impl/util/version/VersionPredicateParser$SingleVersionPredicate.d.ts'
export class VersionPredicateParser$MultiVersionPredicate extends Object implements VersionPredicate {
    constructor(arg0: VersionPredicateParser$SingleVersionPredicate[])
    // private predicates: VersionPredicateParser$SingleVersionPredicate[];
    equals(arg0: Object | null): boolean;
    getInterval(): VersionInterval;
    getTerms(): VersionPredicate$PredicateTerm[];
    hashCode(): number;
    test(arg0: Version): boolean;
    toString(): string;
}