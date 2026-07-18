import type { Cookie } from '../../../io/ktor/http/Cookie.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { GeneratedSerializer } from '../../../kotlinx/serialization/internal/GeneratedSerializer.d.ts'
export class Cookie$$serializer extends Object implements GeneratedSerializer<Cookie> {
    static INSTANCE: Cookie$$serializer;
    readonly descriptor: SerialDescriptor;
    childSerializers(): KSerializer<Object>[];
    deserialize(decoder: Decoder): Cookie;
    serialize(encoder: Encoder, value: Cookie): void;
    typeParametersSerializers(): KSerializer<Object>[];
}