import type { Object } from '../../java/lang/Object.d.ts'
import type { DeserializationStrategy } from '../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerializationStrategy } from '../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { CompositeDecoder } from '../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { Encoder } from '../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { AbstractPolymorphicSerializer } from '../../kotlinx/serialization/internal/AbstractPolymorphicSerializer.d.ts'
export class PolymorphicSerializerKt extends Object {
    static findPolymorphicSerializer<T extends unknown>(self: AbstractPolymorphicSerializer<T>, decoder: CompositeDecoder, klassName: string | null): DeserializationStrategy<T>;
    static findPolymorphicSerializer<T extends unknown>(self: AbstractPolymorphicSerializer<T>, encoder: Encoder, value: T): SerializationStrategy<T>;
}