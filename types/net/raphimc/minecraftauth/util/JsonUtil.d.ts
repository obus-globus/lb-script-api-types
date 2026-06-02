import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { KeyPair } from '../../../../java/security/KeyPair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
export class JsonUtil extends Object {
    static decodeKeyPair(paramarg0: Map$Entry<string, GsonElement>[]): KeyPair;
    static encodeKeyPair(paramarg0: KeyPair): JsonObject;
    constructor()
}