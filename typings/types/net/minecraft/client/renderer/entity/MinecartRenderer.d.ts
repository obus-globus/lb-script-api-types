import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { BlockDisplayContext } from '../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { AbstractMinecartRenderer } from '../../../../../net/minecraft/client/renderer/entity/AbstractMinecartRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MinecartRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/MinecartRenderState.d.ts'
import type { AbstractMinecart } from '../../../../../net/minecraft/world/entity/vehicle/minecart/AbstractMinecart.d.ts'
export class MinecartRenderer extends AbstractMinecartRenderer<AbstractMinecart, MinecartRenderState> {
    static BLOCK_DISPLAY_CONTEXT: BlockDisplayContext;
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context, model: ModelLayerLocation)
    createRenderState(): MinecartRenderState;
    createRenderState(entity: AbstractMinecart, partialTicks: number): MinecartRenderState;
}