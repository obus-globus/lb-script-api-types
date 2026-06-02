import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { DamageSource } from '../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { FallingBlockEntity } from '../../../../../net/minecraft/world/entity/item/FallingBlockEntity.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface Fallable extends Object{
    getFallDamageSource(entity: Entity): DamageSource;
    onBrokenAfterFall(level: Level, pos: BlockPos, entity: FallingBlockEntity): void;
    onLand(level: Level, pos: BlockPos, state: BlockState, replacedBlock: BlockState, entity: FallingBlockEntity): void;
}