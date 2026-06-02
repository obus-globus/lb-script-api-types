import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BlockGetter } from '../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Explosion } from '../../../../net/minecraft/world/level/Explosion.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { FluidState } from '../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class ExplosionDamageCalculator extends Object {
    constructor()
    getBlockExplosionResistance(explosion: Explosion, level: BlockGetter, pos: BlockPos, block: BlockState, fluid: FluidState): Optional<number>;
    getEntityDamageAmount(explosion: Explosion, entity: Entity, exposure: number): number;
    getKnockbackMultiplier(entity: Entity): number;
    shouldBlockExplode(explosion: Explosion, level: BlockGetter, pos: BlockPos, state: BlockState, power: number): boolean;
    shouldDamageEntity(explosion: Explosion, entity: Entity): boolean;
}