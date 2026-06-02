import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocalDate } from '../../../kotlinx/datetime/LocalDate.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class LocalDateSerializer extends Object implements KSerializer<LocalDate> {
    static INSTANCE: LocalDateSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): LocalDate;
    serialize(encoder: Encoder, value: LocalDate): void;
}