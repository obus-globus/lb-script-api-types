import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SpawnUtil$Strategy } from '../../../net/minecraft/util/SpawnUtil$Strategy.d.ts'
import type { EntitySpawnReason } from '../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
import type { EntityType } from '../../../net/minecraft/world/entity/EntityType.d.ts'
export class SpawnUtil extends Object {
    static trySpawnMob(paramentityType: EntityType<Object>, paramspawnReason: EntitySpawnReason, paramlevel: ServerLevel, paramstart: BlockPos, paramspawnAttempts: number, paramspawnRangeXZ: number, paramspawnRangeY: number, paramstrategy: SpawnUtil$Strategy, paramcheckCollisions: boolean): Optional<Object>;
    constructor()
}