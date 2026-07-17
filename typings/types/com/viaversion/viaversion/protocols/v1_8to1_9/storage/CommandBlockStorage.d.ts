import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class CommandBlockStorage extends Object implements StorableObject {
    constructor()
    readonly permissions: boolean;
    // private storedCommandBlocks: JavaMap<number, JavaMap<BlockPosition, Map$Entry<string, Tag>[]>>;
    addOrUpdateBlock(arg0: BlockPosition, arg1: Map$Entry<string, Tag>[]): void;
    getCommandBlock(arg0: BlockPosition): Optional<Map$Entry<string, Tag>[]>;
    isPermissions(): boolean;
    onRemove(): void;
    setPermissions(arg0: boolean): void;
    unloadChunk(arg0: number, arg1: number): void;
    unloadChunks(): void;
}