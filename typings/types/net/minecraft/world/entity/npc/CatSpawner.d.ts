import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { CustomSpawner } from '../../../../../net/minecraft/world/level/CustomSpawner.d.ts'
export class CatSpawner extends Object implements CustomSpawner {
    constructor()
    // private nextTick: number;
    // private spawnCat(spawnPos: BlockPos, level: ServerLevel, makePersistent: boolean): void;
    // private spawnInHut(level: ServerLevel, spawnPos: BlockPos): void;
    // private spawnInVillage(serverLevel: ServerLevel, spawnPos: BlockPos): void;
    tick(level: ServerLevel, spawnEnemies: boolean): void;
}