import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Pair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SpawnPositionStorage extends Object implements StorableObject {
    static DEFAULT_SPAWN_POSITION: Pair<BlockPosition, number>;
    constructor()
    readonly dimension: string;
    readonly spawnPosition: Pair<BlockPosition, number>;
    getSpawnPosition(): Pair<BlockPosition, number>;
    onRemove(): void;
    setDimension(arg0: string): void;
    setSpawnPosition(arg0: Pair<BlockPosition, number>): void;
}