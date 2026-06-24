import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { SmallSulfurCubeModel } from '../../../../../net/minecraft/client/model/monster/slime/SmallSulfurCubeModel.d.ts'
import type { SulfurCubeModel } from '../../../../../net/minecraft/client/model/monster/slime/SulfurCubeModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockModelResolver } from '../../../../../net/minecraft/client/renderer/block/BlockModelResolver.d.ts'
import type { BlockDisplayContext } from '../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { AbstractCubeMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AbstractCubeMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { SulfurCubeRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/SulfurCubeRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SulfurCube } from '../../../../../net/minecraft/world/entity/monster/cubemob/SulfurCube.d.ts'
export class SulfurCubeRenderer extends AbstractCubeMobRenderer<SulfurCube, SulfurCubeRenderState, SulfurCubeModel> {
    static BLOCK_DISPLAY_CONTEXT: BlockDisplayContext;
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    // private blockModelResolver: BlockModelResolver;
    // private normalModel: SulfurCubeModel;
    // private smallModel: SmallSulfurCubeModel;
    applySizeAndSquish(state: SulfurCubeRenderState, poseStack: PoseStack): void;
    createRenderState(): SulfurCubeRenderState;
    createRenderState(entity: SulfurCube, partialTicks: number): SulfurCubeRenderState;
    extractRenderState(entity: SulfurCube, state: SulfurCubeRenderState, partialTicks: number): void;
    getTextureLocation(state: SulfurCubeRenderState): Identifier;
    scale(state: SulfurCubeRenderState, poseStack: PoseStack): void;
    submit(state: SulfurCubeRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}