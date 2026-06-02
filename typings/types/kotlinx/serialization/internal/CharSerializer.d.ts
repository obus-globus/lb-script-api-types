import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class CharSerializer extends Object implements KSerializer<string> {
    static INSTANCE: CharSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): string;
    serialize(encoder: Encoder, value: string): void;
}