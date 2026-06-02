import type { Object } from '../../../java/lang/Object.d.ts'
import type { YearMonth } from '../../../kotlinx/datetime/YearMonth.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class YearMonthSerializer extends Object implements KSerializer<YearMonth> {
    static INSTANCE: YearMonthSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): YearMonth;
    serialize(encoder: Encoder, value: YearMonth): void;
}