import type { Object } from '../../../java/lang/Object.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
export class DecodingKt extends Object {
    static decodeIfNullable<T extends unknown>(self: Decoder, deserializer: DeserializationStrategy<T>, block: () => T | null): T | null;
    static decodeStructure<T extends unknown>(self: Decoder, descriptor: SerialDescriptor, block: (param0: CompositeDecoder) => T): T;
}