import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { EvokerFangsModel } from '../../../../../net/minecraft/client/model/effects/EvokerFangsModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { EvokerFangsRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EvokerFangsRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { EvokerFangs } from '../../../../../net/minecraft/world/entity/projectile/EvokerFangs.d.ts'
export class EvokerFangsRenderer extends EntityRenderer<EvokerFangs, EvokerFangsRenderState> {
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context)
    // private model: EvokerFangsModel;
    createRenderState(): EvokerFangsRenderState;
    extractRenderState(entity: EvokerFangs, state: EvokerFangsRenderState, partialTicks: number): void;
    submit(state: EvokerFangsRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}