import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassifierDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
import type { LookupLocation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ChainedMemberScope$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/ChainedMemberScope$Companion.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { MemberScope$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
export class ChainedMemberScope extends Object implements MemberScope {
    static Companion: ChainedMemberScope$Companion;
    static Companion: MemberScope$Companion;
    private constructor(arg0: string, arg1: MemberScope[])
    // private debugName: string;
    // private scopes: MemberScope[];
    getClassifierNames(): Name[];
    getContributedClassifier(arg0: Name, arg1: LookupLocation): ClassifierDescriptor;
    getContributedDescriptors(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): DeclarationDescriptor[];
    getContributedFunctions(arg0: Name, arg1: LookupLocation): SimpleFunctionDescriptor[];
    getContributedVariables(arg0: Name, arg1: LookupLocation): PropertyDescriptor[];
    getFunctionNames(): Name[];
    getVariableNames(): Name[];
    recordLookup(arg0: Name, arg1: LookupLocation): void;
    toString(): string;
}