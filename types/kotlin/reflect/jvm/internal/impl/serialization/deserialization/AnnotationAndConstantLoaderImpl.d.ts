import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { NotFoundClasses } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/NotFoundClasses.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$Property } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { ConstantValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { SerializerExtensionProtocol } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/SerializerExtensionProtocol.d.ts'
import type { AbstractAnnotationLoader } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/AbstractAnnotationLoader.d.ts'
import type { AnnotationAndConstantLoader } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/AnnotationAndConstantLoader.d.ts'
import type { AnnotationDeserializer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/AnnotationDeserializer.d.ts'
import type { ProtoContainer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ProtoContainer.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class AnnotationAndConstantLoaderImpl extends AbstractAnnotationLoader<AnnotationDescriptor> implements AnnotationAndConstantLoader<AnnotationDescriptor, ConstantValue<Object>> {
    constructor(arg0: ModuleDescriptor, arg1: NotFoundClasses, arg2: SerializerExtensionProtocol)
    // private deserializer: AnnotationDeserializer;
    loadAnnotation(arg0: ProtoBuf$Annotation, arg1: NameResolver): AnnotationDescriptor;
    loadAnnotationDefaultValue(arg0: ProtoContainer, arg1: ProtoBuf$Property, arg2: KotlinType): ConstantValue<Object>;
    loadPropertyConstant(arg0: ProtoContainer, arg1: ProtoBuf$Property, arg2: KotlinType): ConstantValue<Object>;
}