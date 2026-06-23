import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$EnumEntry } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$EnumEntry.d.ts'
import type { ProtoBuf$Property } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { ProtoBuf$Type } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$TypeParameter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter.d.ts'
import type { ProtoBuf$ValueParameter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ValueParameter.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { MessageLite } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { SerializerExtensionProtocol } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/SerializerExtensionProtocol.d.ts'
import type { AnnotatedCallableKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/AnnotatedCallableKind.d.ts'
import type { AnnotationLoader } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/AnnotationLoader.d.ts'
import type { ProtoContainer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ProtoContainer.d.ts'
import type { ProtoContainer$Class } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ProtoContainer$Class.d.ts'
export abstract class AbstractAnnotationLoader<A extends unknown> extends Object implements AnnotationLoader<A> {
    constructor(arg0: SerializerExtensionProtocol)
    // private protocol: SerializerExtensionProtocol;
    getProtocol(): SerializerExtensionProtocol;
    loadCallableAnnotations(arg0: ProtoContainer, arg1: MessageLite, arg2: AnnotatedCallableKind): A[];
    loadClassAnnotations(arg0: ProtoContainer$Class): A[];
    loadContextParameterAnnotations(arg0: ProtoContainer, arg1: MessageLite, arg2: AnnotatedCallableKind, arg3: number, arg4: ProtoBuf$ValueParameter): A[];
    loadEnumEntryAnnotations(arg0: ProtoContainer, arg1: ProtoBuf$EnumEntry): A[];
    loadExtensionReceiverParameterAnnotations(arg0: ProtoContainer, arg1: MessageLite, arg2: AnnotatedCallableKind): A[];
    loadPropertyBackingFieldAnnotations(arg0: ProtoContainer, arg1: ProtoBuf$Property): A[];
    loadPropertyDelegateFieldAnnotations(arg0: ProtoContainer, arg1: ProtoBuf$Property): A[];
    loadTypeAnnotations(arg0: ProtoBuf$Type, arg1: NameResolver): A[];
    loadTypeParameterAnnotations(arg0: ProtoBuf$TypeParameter, arg1: NameResolver): A[];
    loadValueParameterAnnotations(arg0: ProtoContainer, arg1: MessageLite, arg2: AnnotatedCallableKind, arg3: number, arg4: ProtoBuf$ValueParameter): A[];
}