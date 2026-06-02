import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class JsonArraySerializer extends Object implements KSerializer<(Object | null)[]> {
    static INSTANCE: JsonArraySerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): (Object | null)[];
    serialize(encoder: Encoder, value: (Object | null)[]): void;
}