import type { ClassifierDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { PackageFragmentDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentDescriptor.d.ts'
import type { LookupLocation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { ProtoBuf$Package } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Package.d.ts'
import type { BinaryVersion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/BinaryVersion.d.ts'
import type { NameResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { ClassId } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
import type { MemberScope$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
import type { DeserializationComponents } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializationComponents.d.ts'
import type { DeserializedContainerSource } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedContainerSource.d.ts'
import type { DeserializedMemberScope } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedMemberScope.d.ts'
export class DeserializedPackageMemberScope extends DeserializedMemberScope {
    static Companion: MemberScope$Companion;
    constructor(arg0: PackageFragmentDescriptor, arg1: ProtoBuf$Package, arg2: NameResolver, arg3: BinaryVersion, arg4: DeserializedContainerSource, arg5: DeserializationComponents, arg6: string, arg7: () => Name[])
    // private debugName: string;
    // private packageDescriptor: PackageFragmentDescriptor;
    // private packageFqName: FqName;
    readonly proto: ProtoBuf$Package;
    addEnumEntryDescriptors(arg0: DeclarationDescriptor[], arg1: (param0: Name) => boolean): void;
    createClassId(arg0: Name): ClassId;
    getContributedClassifier(arg0: Name, arg1: LookupLocation): ClassifierDescriptor;
    getContributedDescriptors(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): DeclarationDescriptor[];
    getNonDeclaredClassifierNames(): Name[];
    getNonDeclaredFunctionNames(): Name[];
    getNonDeclaredVariableNames(): Name[];
    getProto(): ProtoBuf$Package;
    hasClass(arg0: Name): boolean;
    recordLookup(arg0: Name, arg1: LookupLocation): void;
    toString(): string;
}