import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocalDateTime } from '../../../kotlinx/datetime/LocalDateTime.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class LocalDateTimeSerializer extends Object implements KSerializer<LocalDateTime> {
    static INSTANCE: LocalDateTimeSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): LocalDateTime;
    serialize(encoder: Encoder, value: LocalDateTime): void;
}