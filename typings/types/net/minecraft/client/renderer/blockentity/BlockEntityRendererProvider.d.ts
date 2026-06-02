import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { BlockEntityRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export interface BlockEntityRendererProvider<T extends BlockEntity, S extends BlockEntityRenderState> extends Object{
    create(context: BlockEntityRendererProvider$Context): BlockEntityRenderer<T, S>;
}