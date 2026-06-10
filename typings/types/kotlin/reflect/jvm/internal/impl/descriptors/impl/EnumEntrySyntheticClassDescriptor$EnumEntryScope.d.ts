import type { CallableMemberDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
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
    // private allDescriptors: NotNullLazyValue<DeclarationDescriptor[]>;
    // private functions: MemoizedFunctionToNotNull<Name, SimpleFunctionDescriptor[]>;
    // private properties: MemoizedFunctionToNotNull<Name, PropertyDescriptor[]>;
    // private computeAllDeclarations(): DeclarationDescriptor[];
    // private computeFunctions(arg0: Name): SimpleFunctionDescriptor[];
    // private computeProperties(arg0: Name): PropertyDescriptor[];
    getClassifierNames(): Name[];
    getContributedDescriptors(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): DeclarationDescriptor[];
    getContributedFunctions(arg0: Name, arg1: LookupLocation): SimpleFunctionDescriptor[];
    getContributedVariables(arg0: Name, arg1: LookupLocation): PropertyDescriptor[];
    getFunctionNames(): Name[];
    // private getSupertypeScope(): MemberScope;
    getVariableNames(): Name[];
    // private resolveFakeOverrides<D extends CallableMemberDescriptor>(arg0: Name, arg1: D[]): D[];
}