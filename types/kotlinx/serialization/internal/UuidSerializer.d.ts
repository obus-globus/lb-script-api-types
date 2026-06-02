import type { Object } from '../../../java/lang/Object.d.ts'
import type { Uuid } from '../../../kotlin/uuid/Uuid.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class UuidSerializer extends Object implements KSerializer<Uuid> {
    static INSTANCE: UuidSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): Uuid;
    serialize(encoder: Encoder, value: Uuid): void;
}