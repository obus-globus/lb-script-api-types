import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { ExperienceOrbRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ExperienceOrbRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ExperienceOrb } from '../../../../../net/minecraft/world/entity/ExperienceOrb.d.ts'
export class ExperienceOrbRenderer extends EntityRenderer<ExperienceOrb, ExperienceOrbRenderState> {
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): ExperienceOrbRenderState;
    extractRenderState(entity: ExperienceOrb, state: ExperienceOrbRenderState, partialTicks: number): void;
    getBlockLightLevel(entity: ExperienceOrb, blockPos: BlockPos): number;
    submit(state: ExperienceOrbRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}