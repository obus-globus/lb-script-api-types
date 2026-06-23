import type { Object } from '../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../kotlinx/serialization/encoding/Decoder.d.ts'
export interface DeserializationStrategy<T extends unknown> extends Object{
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): T;
}