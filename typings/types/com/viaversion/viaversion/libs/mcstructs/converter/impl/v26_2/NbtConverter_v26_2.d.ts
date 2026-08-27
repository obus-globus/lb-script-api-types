import type { Tag } from '../../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { NbtConverter_v1_21_5 } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/impl/v1_21_5/NbtConverter_v1_21_5.d.ts'
import type { Result } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { SNbt } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { Map$Entry } from '../../../../../../../../java/util/Map$Entry.d.ts'
export class NbtConverter_v26_2 extends NbtConverter_v1_21_5 {
    static INSTANCE: NbtConverter_v26_2;
    constructor()
    constructor(arg0: SNbt<Map$Entry<string, Tag>[]>)
    asBoolean(arg0: Tag): Result<boolean>;
}