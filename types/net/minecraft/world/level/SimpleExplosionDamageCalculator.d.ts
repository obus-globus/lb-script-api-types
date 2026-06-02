import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BlockGetter } from '../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Explosion } from '../../../../net/minecraft/world/level/Explosion.d.ts'
import type { ExplosionDamageCalculator } from '../../../../net/minecraft/world/level/ExplosionDamageCalculator.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { FluidState } from '../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class SimpleExplosionDamageCalculator extends ExplosionDamageCalculator {
    constructor(explodesBlocks: boolean, damagesEntities: boolean, knockbackMultiplier: Optional<number>, immuneBlocks: Optional<Holder<T>[]>)
    // private damagesEntities: boolean;
    // private explodesBlocks: boolean;
    // private immuneBlocks: Optional<Holder<T>[]>;
    // private knockbackMultiplier: Optional<number>;
    getBlockExplosionResistance(explosion: Explosion, level: BlockGetter, pos: BlockPos, block: BlockState, fluid: FluidState): Optional<number>;
    getKnockbackMultiplier(entity: Entity): number;
    shouldBlockExplode(explosion: Explosion, level: BlockGetter, pos: BlockPos, state: BlockState, power: number): boolean;
    shouldDamageEntity(explosion: Explosion, entity: Entity): boolean;
}