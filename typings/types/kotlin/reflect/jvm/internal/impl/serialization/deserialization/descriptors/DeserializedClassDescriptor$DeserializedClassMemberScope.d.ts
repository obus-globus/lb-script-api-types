import type { CallableMemberDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { ClassifierDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
import type { LookupLocation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { ClassId } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
import type { MemberScope$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
import type { DeserializedClassDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedClassDescriptor.d.ts'
import type { DeserializedMemberScope } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedMemberScope.d.ts'
import type { NotNullLazyValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class DeserializedClassDescriptor$DeserializedClassMemberScope extends DeserializedMemberScope {
    static Companion: MemberScope$Companion;
    constructor(null_: DeserializedClassDescriptor$DeserializedClassMemberScope)
    // private allDescriptors: NotNullLazyValue<DeclarationDescriptor[]>;
    // private kotlinTypeRefiner: KotlinTypeRefiner;
    // private refinedSupertypes: NotNullLazyValue<KotlinType[]>;
    addEnumEntryDescriptors(arg0: DeclarationDescriptor[], arg1: (param0: Name) => boolean): void;
    computeNonDeclaredFunctions(arg0: Name, arg1: SimpleFunctionDescriptor[]): void;
    computeNonDeclaredProperties(arg0: Name, arg1: PropertyDescriptor[]): void;
    createClassId(arg0: Name): ClassId;
    // private generateFakeOverrides<D extends CallableMemberDescriptor>(arg0: Name, arg1: D[], arg2: D[]): void;
    // private getClassDescriptor(): DeserializedClassDescriptor;
    getContributedClassifier(arg0: Name, arg1: LookupLocation): ClassifierDescriptor;
    getContributedDescriptors(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): DeclarationDescriptor[];
    getContributedFunctions(arg0: Name, arg1: LookupLocation): SimpleFunctionDescriptor[];
    getContributedVariables(arg0: Name, arg1: LookupLocation): PropertyDescriptor[];
    getNonDeclaredClassifierNames(): Name[];
    getNonDeclaredFunctionNames(): Name[];
    getNonDeclaredVariableNames(): Name[];
    isDeclaredFunctionAvailable(arg0: SimpleFunctionDescriptor): boolean;
    recordLookup(arg0: Name, arg1: LookupLocation): void;
}