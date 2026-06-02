import type { Object } from '../../../java/lang/Object.d.ts'
import type { Month } from '../../../kotlinx/datetime/Month.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class MonthSerializer extends Object implements KSerializer<Month> {
    static INSTANCE: MonthSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): Month;
    serialize(encoder: Encoder, value: Month): void;
}