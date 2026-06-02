import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BlockGetter } from '../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Explosion } from '../../../../net/minecraft/world/level/Explosion.d.ts'
import type { ExplosionDamageCalculator } from '../../../../net/minecraft/world/level/ExplosionDamageCalculator.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { FluidState } from '../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class EntityBasedExplosionDamageCalculator extends ExplosionDamageCalculator {
    constructor(source: Entity)
    // private source: Entity;
    getBlockExplosionResistance(arg0: Explosion, arg1: BlockGetter, arg2: BlockPos, arg3: BlockState, arg4: FluidState): Optional<Object>;
    shouldBlockExplode(explosion: Explosion, level: BlockGetter, pos: BlockPos, state: BlockState, power: number): boolean;
}