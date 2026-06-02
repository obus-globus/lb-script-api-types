import type { Object } from '../../../java/lang/Object.d.ts'
import type { Instant } from '../../../kotlin/time/Instant.d.ts'
import type { DateTimeComponents } from '../../../kotlinx/datetime/format/DateTimeComponents.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export abstract class FormattedInstantSerializer extends Object implements KSerializer<Instant> {
    constructor(name: string, format: DateTimeFormat<DateTimeComponents>)
    readonly descriptor: SerialDescriptor;
    // private format: DateTimeFormat<DateTimeComponents>;
    deserialize(decoder: Decoder): Instant;
    serialize(encoder: Encoder, value: Instant): void;
    toString(): string;
}