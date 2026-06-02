import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cbor } from '../../../kotlinx/serialization/cbor/Cbor.d.ts'
import type { SerializersModule } from '../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class CborBuilder extends Object {
    constructor(cbor: Cbor)
    alwaysUseByteString: boolean;
    encodeDefaults: boolean;
    encodeKeyTags: boolean;
    encodeObjectTags: boolean;
    encodeValueTags: boolean;
    ignoreUnknownKeys: boolean;
    preferCborLabelsOverNames: boolean;
    serializersModule: SerializersModule;
    useDefiniteLengthEncoding: boolean;
    verifyKeyTags: boolean;
    verifyObjectTags: boolean;
    verifyValueTags: boolean;
}