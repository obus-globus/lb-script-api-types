import type { JsonObjectDeserializer } from '../../../../io/jsonwebtoken/impl/io/JsonObjectDeserializer.d.ts'
import type { Deserializer } from '../../../../io/jsonwebtoken/io/Deserializer.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class JwkDeserializer extends JsonObjectDeserializer {
    constructor(arg0: Deserializer<Object>)
    malformed(arg0: Throwable): RuntimeException;
}