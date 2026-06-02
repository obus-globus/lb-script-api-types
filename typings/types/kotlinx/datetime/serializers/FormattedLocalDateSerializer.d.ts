import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocalDate } from '../../../kotlinx/datetime/LocalDate.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export abstract class FormattedLocalDateSerializer extends Object implements KSerializer<LocalDate> {
    constructor(name: string, format: DateTimeFormat<LocalDate>)
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): LocalDate;
    serialize(encoder: Encoder, value: LocalDate): void;
}