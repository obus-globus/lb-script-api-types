import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
export class ScopeUtilsKt extends Object {
    static concat<T extends unknown>(paramarg0: T[], paramarg1: T[]): T[];
    static listOfNonEmptyScopes(paramarg0: MemberScope[]): MemberScope[];
}