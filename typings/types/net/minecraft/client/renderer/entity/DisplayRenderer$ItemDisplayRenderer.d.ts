import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockDisplayContext } from '../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { DisplayRenderer } from '../../../../../net/minecraft/client/renderer/entity/DisplayRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { ItemDisplayEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ItemDisplayEntityRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { Display$ItemDisplay } from '../../../../../net/minecraft/world/entity/Display$ItemDisplay.d.ts'
import type { Display$ItemDisplay$ItemRenderState } from '../../../../../net/minecraft/world/entity/Display$ItemDisplay$ItemRenderState.d.ts'
export class DisplayRenderer$ItemDisplayRenderer extends DisplayRenderer<Display$ItemDisplay, Display$ItemDisplay$ItemRenderState, ItemDisplayEntityRenderState> {
    static BLOCK_DISPLAY_CONTEXT: BlockDisplayContext;
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context)
    // private itemModelResolver: ItemModelResolver;
    createRenderState(): ItemDisplayEntityRenderState;
    createRenderState(entity: Display$ItemDisplay, partialTicks: number): ItemDisplayEntityRenderState;
    extractRenderState(entity: Display$ItemDisplay, state: ItemDisplayEntityRenderState, partialTicks: number): void;
    submitInner(state: ItemDisplayEntityRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, interpolationProgress: number): void;
}