import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LightningBoltRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LightningBoltRenderState.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { LightningBolt } from '../../../../../net/minecraft/world/entity/LightningBolt.d.ts'
export class LightningBoltRenderer extends EntityRenderer<LightningBolt, LightningBoltRenderState> {
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context)
    affectedByCulling(entity: LightningBolt): boolean;
    createRenderState(): LightningBoltRenderState;
    extractRenderState(entity: LightningBolt, state: LightningBoltRenderState, partialTicks: number): void;
    // private iris$overrideTex(): RenderType;
    submit(state: LightningBoltRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}