import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockEntityRenderer } from '../../../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { BlockEntityRendererProvider } from '../../../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { BlockEntity } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
export class BlockEntityRendererRegistry extends Object {
    static register(paramarg0: BlockEntityType<BlockEntity>, paramarg1: (param0: BlockEntityRendererProvider$Context) => BlockEntityRenderer<Object, Object>): void;
    private constructor()
}