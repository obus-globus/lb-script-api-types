import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DeserializedDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeserializedDescriptor.d.ts'
import type { NameResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { TypeTable } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/TypeTable.d.ts'
import type { MessageLite } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { DescriptorWithContainerSource } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DescriptorWithContainerSource.d.ts'
import type { DeserializedContainerSource } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedContainerSource.d.ts'
export interface DeserializedMemberDescriptor extends Object, DeserializedDescriptor, DescriptorWithContainerSource{
    getContainerSource(): DeserializedContainerSource;
    getNameResolver(): NameResolver;
    getProto(): MessageLite;
    getTypeTable(): TypeTable;
}