import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export interface BellBlockEntity$ResonationEndAction extends Object{
    run(level: Level, pos: BlockPos, nearbyEntities: LivingEntity[]): void;
}