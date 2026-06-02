import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { VillageSiege$State } from '../../../../../../net/minecraft/world/entity/ai/village/VillageSiege$State.d.ts'
import type { CustomSpawner } from '../../../../../../net/minecraft/world/level/CustomSpawner.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class VillageSiege extends Object implements CustomSpawner {
    constructor()
    // private hasSetupSiege: boolean;
    // private nextSpawnTime: number;
    // private siegeState: VillageSiege$State;
    // private spawnX: number;
    // private spawnY: number;
    // private spawnZ: number;
    // private zombiesToSpawn: number;
    // private findRandomSpawnPos(level: ServerLevel, pos: BlockPos): Vec3;
    tick(level: ServerLevel, spawnEnemies: boolean): void;
    // private trySpawn(level: ServerLevel): void;
    // private tryToSetupSiege(level: ServerLevel): boolean;
}