import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockEntityProvider$BlockEntityHandler } from '../../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/provider/BlockEntityProvider$BlockEntityHandler.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export class SkullHandler extends Object implements BlockEntityProvider$BlockEntityHandler {
    constructor()
    transform(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): number;
}