import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockEntityRenderPredicate } from '../../../../../../../net/caffeinemc/mods/sodium/api/blockentity/BlockEntityRenderPredicate.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockGetter } from '../../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { BlockEntity } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export interface ExtendedBlockEntityType<T extends BlockEntity> extends Object {
    sodium$addRenderPredicate(arg0: (param0: BlockGetter, param1: BlockPos, param2: T) => boolean): void;
    sodium$getRenderPredicates(): (param0: BlockGetter, param1: BlockPos, param2: T) => boolean[];
    sodium$removeRenderPredicate(arg0: (param0: BlockGetter, param1: BlockPos, param2: T) => boolean): boolean;
}