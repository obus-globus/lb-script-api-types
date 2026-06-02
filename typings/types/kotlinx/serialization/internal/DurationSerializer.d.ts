import type { Object } from '../../../java/lang/Object.d.ts'
import type { Duration } from '../../../kotlin/time/Duration.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class DurationSerializer extends Object implements KSerializer<Duration> {
    static INSTANCE: DurationSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): Duration;
    serialize(encoder: Encoder, value: Duration): void;
}