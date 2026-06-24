import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockModelResolver } from '../../../../../net/minecraft/client/renderer/block/BlockModelResolver.d.ts'
import type { BlockDisplayContext } from '../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { TntRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/TntRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { PrimedTnt } from '../../../../../net/minecraft/world/entity/item/PrimedTnt.d.ts'
export class TntRenderer extends EntityRenderer<PrimedTnt, TntRenderState> {
    static BLOCK_DISPLAY_CONTEXT: BlockDisplayContext;
    static NAMETAG_SCALE: number;
    static getSwellAmount(paramfuse: number): number;
    static isLit(paramfuse: number): boolean;
    constructor(context: EntityRendererProvider$Context)
    // private blockModelResolver: BlockModelResolver;
    createRenderState(): TntRenderState;
    createRenderState(entity: PrimedTnt, partialTicks: number): TntRenderState;
    extractRenderState(entity: PrimedTnt, state: TntRenderState, partialTicks: number): void;
    submit(state: TntRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}