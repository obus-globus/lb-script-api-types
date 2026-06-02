import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockEntity } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export interface BlockEntityGetter extends Object{
    lithium$getLoadedExistingBlockEntity(arg0: BlockPos): BlockEntity;
}