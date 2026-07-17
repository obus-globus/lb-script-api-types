import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockEntityRenderPredicate } from '../../../../../../net/caffeinemc/mods/sodium/api/blockentity/BlockEntityRenderPredicate.d.ts'
import type { ExtendedBlockEntityType } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/ExtendedBlockEntityType.d.ts'
import type { FabricBlockEntityType } from '../../../../../../net/fabricmc/fabric/api/object/builder/v1/block/entity/FabricBlockEntityType.d.ts'
import type { BlockEntityTypeAccessor } from '../../../../../../net/fabricmc/fabric/mixin/lookup/BlockEntityTypeAccessor.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder$Reference } from '../../../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType$BlockEntitySupplier } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType$BlockEntitySupplier.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BlockEntityType<T extends BlockEntity> extends Object implements ExtendedBlockEntityType<BlockEntity>, FabricBlockEntityType, BlockEntityTypeAccessor {
    constructor(factory: (param0: BlockPos, param1: BlockState) => T, validBlocks: Block[])
    // private builtInRegistryHolder: Holder$Reference<BlockEntityType<any>>;
    // private factory: (param0: BlockPos, param1: BlockState) => T;
    // private sodium$renderPredicates: (param0: BlockGetter, param1: BlockPos, param2: BlockEntity) => boolean[];
    // private validBlocks: Block[];
    addValidBlock(arg0: Block): void;
    builtInRegistryHolder(): Holder$Reference<BlockEntityType<any>>;
    create(worldPosition: BlockPos, blockState: BlockState): T;
    getBlockEntity(level: BlockGetter, pos: BlockPos): T;
    isValid(state: BlockState): boolean;
    onlyOpCanSetNbt(): boolean;
    sodium$addRenderPredicate(arg0: (param0: BlockGetter, param1: BlockPos, param2: BlockEntity) => boolean): void;
    sodium$getRenderPredicates(): (param0: BlockGetter, param1: BlockPos, param2: BlockEntity) => boolean[];
    sodium$removeRenderPredicate(arg0: (param0: BlockGetter, param1: BlockPos, param2: BlockEntity) => boolean): boolean;
}