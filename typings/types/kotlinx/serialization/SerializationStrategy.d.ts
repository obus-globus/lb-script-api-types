import type { Object } from '../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Encoder } from '../../kotlinx/serialization/encoding/Encoder.d.ts'
export interface SerializationStrategy<T extends unknown> extends Object{
    readonly descriptor: SerialDescriptor;
    serialize(encoder: Encoder, value: T): void;
}