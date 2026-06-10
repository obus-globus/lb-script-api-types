import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { VersionInterval } from '../../../../../../net/fabricmc/loader/api/metadata/version/VersionInterval.d.ts'
import type { VersionPredicate } from '../../../../../../net/fabricmc/loader/api/metadata/version/VersionPredicate.d.ts'
import type { VersionPredicate$PredicateTerm } from '../../../../../../net/fabricmc/loader/api/metadata/version/VersionPredicate$PredicateTerm.d.ts'
export class VersionPredicateParser$AnyVersionPredicate extends Object implements VersionPredicate {
    static parse(paramarg0: string[]): VersionPredicate[];
    static parse(paramarg0: string): VersionPredicate;
    private constructor()
    getInterval(): VersionInterval;
    getTerms(): VersionPredicate$PredicateTerm[];
    test(arg0: Version): boolean;
    toString(): string;
}