import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { VersionInterval } from '../../../../../../net/fabricmc/loader/api/metadata/version/VersionInterval.d.ts'
import type { VersionPredicate$PredicateTerm } from '../../../../../../net/fabricmc/loader/api/metadata/version/VersionPredicate$PredicateTerm.d.ts'
export interface VersionPredicate extends Predicate<Version>, Object {
    and(arg0: (param0: Version) => boolean): (param0: Version) => boolean;
    getInterval(): VersionInterval;
    getTerms(): VersionPredicate$PredicateTerm[];
    negate(): (param0: Version) => boolean;
    or(arg0: (param0: Version) => boolean): (param0: Version) => boolean;
}