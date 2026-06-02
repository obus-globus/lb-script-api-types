import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { VersionComparisonOperator } from '../../../../../../net/fabricmc/loader/api/metadata/version/VersionComparisonOperator.d.ts'
export interface VersionPredicate$PredicateTerm extends Object{
    getOperator(): VersionComparisonOperator;
    getReferenceVersion(): Version;
}