import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockEntityType$BlockEntitySupplier } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType$BlockEntitySupplier.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ExtendedBlockEntityType<T extends BlockEntity> extends BlockEntityType<T> {
    constructor(arg0: (param0: BlockPos, param1: BlockState) => T, arg1: Block[], arg2: boolean)
    // private canPotentiallyExecuteCommands: boolean;
    onlyOpCanSetNbt(): boolean;
}