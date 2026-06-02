import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LookupLocation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ResolutionScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/ResolutionScope.d.ts'
export interface MemberScope extends Object, ResolutionScope{
    getClassifierNames(): Name[];
    getContributedFunctions(arg0: Name, arg1: LookupLocation): E[];
    getContributedVariables(arg0: Name, arg1: LookupLocation): E[];
    getFunctionNames(): Name[];
    getVariableNames(): Name[];
}