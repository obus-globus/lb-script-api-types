import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { CustomSpawner } from '../../../../../net/minecraft/world/level/CustomSpawner.d.ts'
export class PatrolSpawner extends Object implements CustomSpawner {
    constructor()
    // private nextTick: number;
    // private spawnPatrolMember(level: ServerLevel, pos: BlockPos, random: RandomSource, isLeader: boolean): boolean;
    tick(level: ServerLevel, spawnEnemies: boolean): void;
}