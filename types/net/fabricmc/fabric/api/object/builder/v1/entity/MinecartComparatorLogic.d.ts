import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { AbstractMinecart } from '../../../../../../../../net/minecraft/world/entity/vehicle/minecart/AbstractMinecart.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface MinecartComparatorLogic<T extends AbstractMinecart> extends Object{
    getComparatorValue(arg0: T, arg1: BlockState, arg2: BlockPos): number;
}