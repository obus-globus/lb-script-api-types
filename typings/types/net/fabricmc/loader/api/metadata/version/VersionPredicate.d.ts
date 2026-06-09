import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { VersionInterval } from '../../../../../../net/fabricmc/loader/api/metadata/version/VersionInterval.d.ts'
export interface VersionPredicate extends Predicate<Version>, Object {
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    getInterval(): VersionInterval;
    getTerms(): E[];
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
}