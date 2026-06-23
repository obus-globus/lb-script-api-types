import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { KClass } from '../../kotlin/reflect/KClass.d.ts'
import type { DeserializationStrategy } from '../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
import type { SerializationStrategy } from '../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { SerialDescriptor } from '../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeDecoder } from '../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { Encoder } from '../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { AbstractPolymorphicSerializer } from '../../kotlinx/serialization/internal/AbstractPolymorphicSerializer.d.ts'
export class SealedClassSerializer<T extends unknown> extends AbstractPolymorphicSerializer<T> {
    constructor(serialName: string, baseClass: KClass<T>, subclasses: KClass<T>[], subclassSerializers: KSerializer<T>[])
    constructor(serialName: string, baseClass: KClass<T>, subclasses: KClass<T>[], subclassSerializers: KSerializer<T>[], classAnnotations: Annotation[])
    // private _annotations: Annotation[];
    readonly baseClass: KClass<T>;
    // private class2Serializer: Map<KClass<T>, KSerializer<T>>;
    /*not mapped: */ getClass2Serializer$kotlinx_serialization_core(): Map<KClass<T>, KSerializer<T>>;
    readonly descriptor: SerialDescriptor;
    // private serialName2Serializer: { [key: string]: KSerializer<T> };
    findPolymorphicSerializerOrNull(decoder: CompositeDecoder, klassName: string | null): DeserializationStrategy<T> | null;
    findPolymorphicSerializerOrNull(encoder: Encoder, value: T): SerializationStrategy<T> | null;
}