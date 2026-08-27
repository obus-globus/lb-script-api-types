import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Provider } from '../../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { Protocol1_12_2To1_13 } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/Protocol1_12_2To1_13.d.ts'
import type { BlockEntityProvider$BlockEntityHandler } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/provider/BlockEntityProvider$BlockEntityHandler.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BlockEntityProvider extends Object implements Provider {
    constructor(arg0: Protocol1_12_2To1_13)
    // private handlers: JavaMap<string, (param0: UserConnection, param1: Map$Entry<string, Tag>[]) => number>;
    // private sendBlockChange(arg0: UserConnection, arg1: BlockPosition, arg2: number): void;
    transform(arg0: UserConnection, arg1: BlockPosition, arg2: Map$Entry<string, Tag>[], arg3: boolean): number;
}