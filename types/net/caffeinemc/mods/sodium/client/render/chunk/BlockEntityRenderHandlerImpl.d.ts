import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockEntityRenderHandler } from '../../../../../../../net/caffeinemc/mods/sodium/api/blockentity/BlockEntityRenderHandler.d.ts'
import type { BlockEntityRenderPredicate } from '../../../../../../../net/caffeinemc/mods/sodium/api/blockentity/BlockEntityRenderPredicate.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockGetter } from '../../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { BlockEntityType } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
export class BlockEntityRenderHandlerImpl extends Object implements BlockEntityRenderHandler {
    static INSTANCE: BlockEntityRenderHandler;
    static instance(): BlockEntityRenderHandler;
    constructor()
    addRenderPredicate(arg0: BlockEntityType<T>, arg1: (param0: T, param1: BlockGetter, param2: BlockPos) => kotlin.Boolean): void;
    removeRenderPredicate(arg0: BlockEntityType<T>, arg1: (param0: T, param1: BlockGetter, param2: BlockPos) => kotlin.Boolean): boolean;
}