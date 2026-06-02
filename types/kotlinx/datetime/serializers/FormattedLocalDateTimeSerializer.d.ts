import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocalDateTime } from '../../../kotlinx/datetime/LocalDateTime.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export abstract class FormattedLocalDateTimeSerializer extends Object implements KSerializer<LocalDateTime> {
    constructor(name: string, format: DateTimeFormat<LocalDateTime>)
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): LocalDateTime;
    serialize(encoder: Encoder, value: LocalDateTime): void;
}