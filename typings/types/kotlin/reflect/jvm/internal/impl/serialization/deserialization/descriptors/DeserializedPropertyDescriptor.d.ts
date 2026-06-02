import type { CallableMemberDescriptor$Kind } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor$Kind.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Modality } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { PropertyDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { PropertyDescriptorImpl } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/PropertyDescriptorImpl.d.ts'
import type { ProtoBuf$Property } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { NameResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { TypeTable } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/TypeTable.d.ts'
import type { VersionRequirementTable } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/VersionRequirementTable.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DeserializedCallableMemberDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedCallableMemberDescriptor.d.ts'
import type { DeserializedContainerSource } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedContainerSource.d.ts'
export class DeserializedPropertyDescriptor extends PropertyDescriptorImpl implements DeserializedCallableMemberDescriptor {
    static create(paramarg0: DeclarationDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: Modality, paramarg3: DescriptorVisibility, paramarg4: boolean, paramarg5: Name, paramarg6: CallableMemberDescriptor$Kind, paramarg7: SourceElement, paramarg8: boolean, paramarg9: boolean, paramarg10: boolean, paramarg11: boolean, paramarg12: boolean, paramarg13: boolean): PropertyDescriptorImpl;
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: DeclarationDescriptor, arg1: PropertyDescriptor, arg2: AnnotationDescriptor[], arg3: Modality, arg4: DescriptorVisibility, arg5: boolean, arg6: Name, arg7: CallableMemberDescriptor$Kind, arg8: boolean, arg9: boolean, arg10: boolean, arg11: boolean, arg12: boolean, arg13: ProtoBuf$Property, arg14: NameResolver, arg15: TypeTable, arg16: VersionRequirementTable, arg17: DeserializedContainerSource)
    readonly containerSource: DeserializedContainerSource;
    readonly nameResolver: NameResolver;
    readonly proto: ProtoBuf$Property;
    readonly typeTable: TypeTable;
    readonly versionRequirementTable: VersionRequirementTable;
    createSubstitutedCopy(arg0: DeclarationDescriptor, arg1: Modality, arg2: DescriptorVisibility, arg3: PropertyDescriptor, arg4: CallableMemberDescriptor$Kind, arg5: Name, arg6: SourceElement): PropertyDescriptorImpl;
    getContainerSource(): DeserializedContainerSource;
    getNameResolver(): NameResolver;
    getProto(): ProtoBuf$Property;
    getTypeTable(): TypeTable;
    getVersionRequirementTable(): VersionRequirementTable;
    isExternal(): boolean;
}