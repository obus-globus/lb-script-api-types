import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableMemberDescriptor$Kind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor$Kind.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { ProtoBuf$MemberKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$MemberKind.d.ts'
import type { ProtoBuf$Visibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Visibility.d.ts'
import type { ProtoEnumFlags } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ProtoEnumFlags.d.ts'
export class ProtoEnumFlagsUtilsKt extends Object {
    static descriptorVisibility(paramarg0: ProtoEnumFlags, paramarg1: ProtoBuf$Visibility): DescriptorVisibility;
    static memberKind(paramarg0: ProtoEnumFlags, paramarg1: ProtoBuf$MemberKind): CallableMemberDescriptor$Kind;
}