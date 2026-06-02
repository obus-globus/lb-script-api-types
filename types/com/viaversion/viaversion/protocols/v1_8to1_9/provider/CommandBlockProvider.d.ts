import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Provider } from '../../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { CommandBlockStorage } from '../../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/storage/CommandBlockStorage.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class CommandBlockProvider extends Object implements Provider {
    constructor()
    addOrUpdateBlock(arg0: UserConnection, arg1: BlockPosition, arg2: Map$Entry<string, Tag>[]): void;
    // private checkPermission(arg0: UserConnection): void;
    get(arg0: UserConnection, arg1: BlockPosition): Optional<Map$Entry<string, Tag>[]>;
    // private getStorage(arg0: UserConnection): CommandBlockStorage;
    sendPermission(arg0: UserConnection): void;
    unloadChunk(arg0: UserConnection, arg1: number, arg2: number): void;
    unloadChunks(arg0: UserConnection): void;
}