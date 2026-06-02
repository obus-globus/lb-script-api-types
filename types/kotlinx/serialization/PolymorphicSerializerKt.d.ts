import type { Object } from '../../java/lang/Object.d.ts'
import type { DeserializationStrategy } from '../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerializationStrategy } from '../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { CompositeDecoder } from '../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { Encoder } from '../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { AbstractPolymorphicSerializer } from '../../kotlinx/serialization/internal/AbstractPolymorphicSerializer.d.ts'
export class PolymorphicSerializerKt extends Object {
    static findPolymorphicSerializer(paramarg0: AbstractPolymorphicSerializer<Object>, paramarg1: CompositeDecoder, paramarg2: string): DeserializationStrategy<Object>;
    static findPolymorphicSerializer(paramarg0: AbstractPolymorphicSerializer<Object>, paramarg1: Encoder, paramarg2: Object | null): SerializationStrategy<Object>;
}