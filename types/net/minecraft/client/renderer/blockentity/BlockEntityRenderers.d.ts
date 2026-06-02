import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockEntityRendererProvider } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { BlockEntityType } from '../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
export class BlockEntityRenderers extends Object {
    static createEntityRenderers(paramcontext: BlockEntityRendererProvider$Context): Map<Object | null, Object | null>;
    static register(paramtype: BlockEntityType<Object>, paramrenderer: (param0: Object | null) => Object | null): void;
    constructor()
}