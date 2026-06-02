import type { Tag } from '../../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { UUID } from '../../../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../../java/util/Map$Entry.d.ts'
export class ExtraCodecs_v1_20_3 extends Object {
    static LENIENT_UUID: Codec<UUID>;
    static STRING_COMPOUND: Codec<Map$Entry<string, Tag>[]>;
    constructor()
}