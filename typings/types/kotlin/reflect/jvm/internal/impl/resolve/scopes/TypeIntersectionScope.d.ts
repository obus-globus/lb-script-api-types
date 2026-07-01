import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
import type { LookupLocation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { AbstractScopeAdapter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/AbstractScopeAdapter.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { MemberScope$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
import type { TypeIntersectionScope$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/TypeIntersectionScope$Companion.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class TypeIntersectionScope extends AbstractScopeAdapter {
    static Companion: MemberScope$Companion;
    static Companion: TypeIntersectionScope$Companion;
    static create(paramarg0: string, paramarg1: KotlinType[]): MemberScope;
    constructor(arg0: string, arg1: MemberScope, arg2: DefaultConstructorMarker)
    // private debugName: string;
    // private workerScope: MemberScope;
    getContributedDescriptors(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): DeclarationDescriptor[];
    getContributedFunctions(arg0: Name, arg1: LookupLocation): SimpleFunctionDescriptor[];
    getContributedVariables(arg0: Name, arg1: LookupLocation): PropertyDescriptor[];
    getWorkerScope(): MemberScope;
}