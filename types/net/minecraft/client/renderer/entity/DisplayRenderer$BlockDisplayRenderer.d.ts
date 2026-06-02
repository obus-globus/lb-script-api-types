import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockDisplayContext } from '../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { DisplayRenderer } from '../../../../../net/minecraft/client/renderer/entity/DisplayRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { BlockDisplayEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/BlockDisplayEntityRenderState.d.ts'
import type { Display$BlockDisplay } from '../../../../../net/minecraft/world/entity/Display$BlockDisplay.d.ts'
import type { Display$BlockDisplay$BlockRenderState } from '../../../../../net/minecraft/world/entity/Display$BlockDisplay$BlockRenderState.d.ts'
export class DisplayRenderer$BlockDisplayRenderer extends DisplayRenderer<Display$BlockDisplay, Display$BlockDisplay$BlockRenderState, BlockDisplayEntityRenderState> {
    static BLOCK_DISPLAY_CONTEXT: BlockDisplayContext;
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): BlockDisplayEntityRenderState;
    extractRenderState(entity: Display$BlockDisplay, state: BlockDisplayEntityRenderState, partialTicks: number): void;
    submitInner(state: BlockDisplayEntityRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, interpolationProgress: number): void;
}