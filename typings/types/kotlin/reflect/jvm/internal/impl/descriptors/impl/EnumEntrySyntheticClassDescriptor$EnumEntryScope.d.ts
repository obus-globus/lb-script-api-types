import type { Function1 } from '../../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { LookupLocation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { MemberScope$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
import type { MemberScopeImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScopeImpl.d.ts'
import type { MemoizedFunctionToNotNull } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNotNull.d.ts'
import type { NotNullLazyValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export class EnumEntrySyntheticClassDescriptor$EnumEntryScope extends MemberScopeImpl {
    static Companion: MemberScope$Companion;
    constructor(null_: EnumEntrySyntheticClassDescriptor$EnumEntryScope, arg1: StorageManager)
    // private allDescriptors: NotNullLazyValue<E[]>;
    // private functions: MemoizedFunctionToNotNull<Name, E[]>;
    // private properties: MemoizedFunctionToNotNull<Name, E[]>;
    // private computeAllDeclarations(): E[];
    // private computeFunctions(arg0: Name): E[];
    // private computeProperties(arg0: Name): E[];
    getClassifierNames(): Name[];
    getContributedDescriptors(arg0: DescriptorKindFilter, arg1: Function1<Name, boolean>): E[];
    getContributedFunctions(arg0: Name, arg1: LookupLocation): E[];
    getContributedVariables(arg0: Name, arg1: LookupLocation): E[];
    getFunctionNames(): Name[];
    // private getSupertypeScope(): MemberScope;
    getVariableNames(): Name[];
    // private resolveFakeOverrides(arg0: Name, arg1: E[]): E[];
}