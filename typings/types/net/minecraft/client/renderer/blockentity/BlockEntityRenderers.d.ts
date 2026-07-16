import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { BlockEntityRendererProvider } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { BlockEntityRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
export class BlockEntityRenderers extends Object {
    static createEntityRenderers(paramcontext: BlockEntityRendererProvider$Context): Map<BlockEntityType<any>, BlockEntityRenderer<any, any>>;
    static register<T extends BlockEntity, S extends BlockEntityRenderState>(paramtype: BlockEntityType<T>, paramrenderer: (param0: BlockEntityRendererProvider$Context) => BlockEntityRenderer<T, S>): void;
    constructor()
}