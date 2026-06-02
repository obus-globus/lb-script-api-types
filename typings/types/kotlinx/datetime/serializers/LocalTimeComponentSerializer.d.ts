import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocalTime } from '../../../kotlinx/datetime/LocalTime.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class LocalTimeComponentSerializer extends Object implements KSerializer<LocalTime> {
    static INSTANCE: LocalTimeComponentSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): LocalTime;
    serialize(encoder: Encoder, value: LocalTime): void;
}