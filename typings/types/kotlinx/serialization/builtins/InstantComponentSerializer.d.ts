import type { Object } from '../../../java/lang/Object.d.ts'
import type { Instant } from '../../../kotlin/time/Instant.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class InstantComponentSerializer extends Object implements KSerializer<Instant> {
    static INSTANCE: InstantComponentSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): Instant;
    serialize(encoder: Encoder, value: Instant): void;
}