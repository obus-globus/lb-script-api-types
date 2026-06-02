import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsBlockEntityProvider$BackwardsBlockEntityHandler } from '../../../../../../com/viaversion/viabackwards/protocol/v1_13to1_12_2/provider/BackwardsBlockEntityProvider$BackwardsBlockEntityHandler.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Provider } from '../../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BackwardsBlockEntityProvider extends Object implements Provider {
    constructor()
    // private handlers: { [key: string]: (param0: number, param1: Map$Entry<string, Tag>[]) => com.viaversion.nbt.tag.CompoundTag };
    isHandled(arg0: string): boolean;
    transform(arg0: UserConnection, arg1: BlockPosition, arg2: Map$Entry<string, Tag>[]): Map$Entry<string, Tag>[];
    transform(arg0: UserConnection, arg1: BlockPosition, arg2: string): Map$Entry<string, Tag>[];
}