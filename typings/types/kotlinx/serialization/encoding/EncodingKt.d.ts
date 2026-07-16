import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class EncodingKt extends Object {
    static encodeCollection<E extends unknown>(self: Encoder, descriptor: SerialDescriptor, collection: E[], block: (param0: CompositeEncoder, param1: number, param2: E) => void): void;
    static encodeCollection(self: Encoder, descriptor: SerialDescriptor, collectionSize: number, block: (param0: CompositeEncoder) => void): void;
    static encodeStructure(self: Encoder, descriptor: SerialDescriptor, block: (param0: CompositeEncoder) => void): void;
}