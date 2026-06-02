import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export interface BlockEntityRenderPredicate<T extends BlockEntity> extends Object{
    shouldRender(arg0: BlockGetter, arg1: BlockPos, arg2: T): boolean;
}