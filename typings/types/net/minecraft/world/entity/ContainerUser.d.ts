import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ContainerOpenersCounter } from '../../../../net/minecraft/world/level/block/entity/ContainerOpenersCounter.d.ts'
export interface ContainerUser extends Object{
    getContainerInteractionRange(): number;
    getLivingEntity(): LivingEntity;
    hasContainerOpen(container: ContainerOpenersCounter, blockPos: BlockPos): boolean;
}