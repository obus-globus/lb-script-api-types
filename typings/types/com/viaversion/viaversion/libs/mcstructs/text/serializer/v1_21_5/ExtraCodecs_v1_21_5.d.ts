import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { URI } from '../../../../../../../../java/net/URI.d.ts'
import type { UUID } from '../../../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class ExtraCodecs_v1_21_5 extends Object {
    static ARGB_COLOR: Codec<number>;
    static CHAT_STRING: Codec<string>;
    static LENIENT_UUID: Codec<UUID>;
    static UNTRUSTED_URI: Codec<URI>;
    constructor()
}