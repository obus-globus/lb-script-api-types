import type { Tag } from '../../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { DataConverter } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/DataConverter.d.ts'
import type { NbtConverter_v1_20_3 } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/impl/v1_20_3/NbtConverter_v1_20_3.d.ts'
import type { Result } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { SNbt } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { Map$Entry } from '../../../../../../../../java/util/Map$Entry.d.ts'
export class NbtConverter_v1_21_5 extends NbtConverter_v1_20_3 {
    static INSTANCE: NbtConverter_v1_20_3;
    static INSTANCE: NbtConverter_v1_21_5;
    constructor()
    constructor(arg0: SNbt<Map$Entry<string, Tag>[]>)
    forkIfDefault(): DataConverter<Tag>;
    mergeList(arg0: Tag, ...arg1: Tag[]): Result<Tag>;
    mergeList(arg0: Tag, arg1: Tag[]): Result<Tag>;
}