import type { Object } from '../../../java/lang/Object.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { JsonDecoder } from '../../../kotlinx/serialization/json/JsonDecoder.d.ts'
import type { JsonEncoder } from '../../../kotlinx/serialization/json/JsonEncoder.d.ts'
export class JsonElementSerializersKt extends Object {
    static asJsonDecoder(self: Decoder): JsonDecoder;
    static asJsonEncoder(self: Encoder): JsonEncoder;
}