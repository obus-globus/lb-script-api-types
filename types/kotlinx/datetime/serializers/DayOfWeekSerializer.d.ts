import type { Object } from '../../../java/lang/Object.d.ts'
import type { DayOfWeek } from '../../../kotlinx/datetime/DayOfWeek.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class DayOfWeekSerializer extends Object implements KSerializer<DayOfWeek> {
    static INSTANCE: DayOfWeekSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): DayOfWeek;
    serialize(encoder: Encoder, value: DayOfWeek): void;
}