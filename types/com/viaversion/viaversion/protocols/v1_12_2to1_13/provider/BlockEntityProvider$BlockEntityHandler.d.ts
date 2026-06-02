import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export interface BlockEntityProvider$BlockEntityHandler extends Object{
    transform(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): number;
}