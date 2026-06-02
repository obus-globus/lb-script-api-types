import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export abstract class AbstractPolymorphicSerializer<T extends Object | number | string | boolean> extends Object implements KSerializer<T> {
    constructor()
    readonly baseClass: KClass<T>;
    // private decodeSequentially(compositeDecoder: CompositeDecoder): T;
    deserialize(decoder: Decoder): T;
    findPolymorphicSerializerOrNull(decoder: CompositeDecoder, klassName: string | null): DeserializationStrategy<T> | null;
    findPolymorphicSerializerOrNull(encoder: Encoder, value: T): SerializationStrategy<T> | null;
    serialize(encoder: Encoder, value: T): void;
}