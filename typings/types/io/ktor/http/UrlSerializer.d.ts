import type { Url } from '../../../io/ktor/http/Url.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class UrlSerializer extends Object implements KSerializer<Url> {
    static INSTANCE: UrlSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): Url;
    serialize(encoder: Encoder, value: Url): void;
}