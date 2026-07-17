import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class JsonObjectSerializer extends Object implements KSerializer<JavaMap<any, any>> {
    static INSTANCE: JsonObjectSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): JavaMap<any, any>;
    serialize(encoder: Encoder, value: JavaMap<any, any>): void;
}